import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

function Campaign({details}) {
  const {query: {slug}} = useRouter()
  return (
    <>
      <Head>
        <title>Campaign Manager | {details.title}</title>
        <meta name="description" content={details.description}></meta>

      </Head>
      {/* background */}
      <div className="fixed h-screen w-full overflow-hidden bg-[url('/laptop.jpeg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute top-0 h-full w-full  bg-[#001101]/80">
          
        </div>
      </div>

      <div className="absolute flex flex-wrap lg:flex-nowrap xl:justify-between w-full cursor-pointer px-[4rem] py-[4rem] xl:px-[32rem] xl:py-[10rem]">
        <div className='w-full'>
          <Image
            className='rounded-full' 
            height={120}
            width={120}
            src={"https://res.cloudinary.com/prenticez/" + details.logo}
            alt="logo"
          />
          <div className='p-4'>
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <small>{moment(details.created_at).format("DD MMM YYYY")} at {moment(details.created_at).format("h:mma")}</small>
          </div>
        </div>
        <div className='mr-auto p-8 space-y-4 w-full xl:mt-[120px]'>
          <input className="w-full p-4" type="email" placeholder='Email Address'/>
          <div className='flex justify-center w-full p-4 bg-blue-600 hover:bg-blue-500 rounded-md' type="submit">SUBSRIBE</div>
          <small className='text-gray-400'>We respect your privacy</small>
        </div>
      </div>

      <footer className='absolute bottom-0 left-0 flex justify-center p-8 w-full text-white border-t-2 border-white bg-[#001101]'>
        <Link href="/">
          <a className='text-xl'>Go back to list</a>
        </Link>
      </footer>

    </>
  )
}

export default Campaign

export async function getStaticProps({params}){
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/campaigns/${params.slug}`)
  let details = await response.json()
  return{
    props: {
      details
    }
  }
}

export async function getStaticPaths(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/campaigns`)
  let data = await response.json()

  const allSlugs = data.map(item=>item.slug)
  const paths = allSlugs.map(slug => ({params: {slug: slug}}))

  return {
    paths,
    fallback: false //only updates when you re-build
  }
}