import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import {useRouter} from 'next/router'

function Campaign({details}) {
  const {query: {slug}} = useRouter()
  console.log('slug', details)

  return (
    <div className="flex justify-between bg-[#21262b] cursor-pointer p-4">
      <div className=''>
        <Image
          className='rounded-full' 
          height={120}
          width={120}
          src={"https://res.cloudinary.com/prenticez/" + details.logo}
          alt="logo"
        />
      </div>

      <div className='mr-auto ml-4'>
        <h2>{details.title}</h2>
        <p>{details.description}</p>
        <small>{moment(details.created_at).format("DD MMM YYYY")} at {moment(details.created_at).format("h:mma")}</small>
      </div>
    </div>
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
  
  console.log('data', data)

  const allSlugs = data.map(item=>item.slug)
  const paths = allSlugs.map(slug => ({params: {slug: slug}}))

  return {
    paths,
    fallback: false //only updates when you re-build
  }
}