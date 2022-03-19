import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import moment from "moment"

export default function Home({campanigns, error}) {
  const router = useRouter()

  const handleClick = (slug) => {
    console.log('slug', slug)
    router.push("/" + slug)
  }

  return (
    <div className='flex justify-center'>
      <main className="w-full max-w-3xl xl:max-w-7xl space-y-4">
        <h1>Campaign Manager</h1>
        {error && <p>{error}</p>}
        
        {campanigns.map((campanign) => {
          return(
            <div 
              key={campanign.id}
              className="flex justify-between bg-[#21262b] cursor-pointer p-4"
              onClick={() => handleClick(campanign.slug)}
            >


              <div className=''>
                <Image
                  className='rounded-full' 
                  height={120}
                  width={120}
                  src={"https://res.cloudinary.com/prenticez/" + campanign.logo}
                  alt="logo"
                />
              </div>

              <div className='mr-auto ml-4'>
            
              <Link href={`/${campanign.slug}`} passHref>
                <a>
                  <h2>{campanign.title}</h2>
                </a>
              </Link>
                
                <p>{campanign.description}</p>
                <small>{moment(campanign.created_at).format("DD MMM YYYY")} at {moment(campanign.created_at).format("h:mma")}</small>
              </div>

    

            </div>
          )
        })}
      </main>
    
    </div>
  )
}

export async function getStaticProps(){
  let campanigns = []
  let error = null

  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/campaigns`)
    campanigns = await response.json()
  } catch(err){
    error = err.message ? err.message : 'Something went wrong'
  }

  return {
    props:{
      campanigns,
      error
    }
  }
}