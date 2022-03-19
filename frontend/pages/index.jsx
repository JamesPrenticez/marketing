import Head from 'next/head'
import Image from 'next/image'

export default function Home({campanigns, error}) {
  return (
    <div>
      <main>
        <h1>Campaign Manager</h1>
        {error && <p>{error}</p>}
        {campanigns.map((campanign) => {
          return(
            <div key={campanign.id}>

              <div>
                <Image 
                  height={120}
                  width={120}
                  src={"https://res.cloudinary.com/prenticez/" + campanign.logo}
                  alt="logo"
                />
              </div>

              <div>
                <h1>{campanign.title}</h1>
                <p>{campanign.description}</p>
                <p>{campanign.created_at}</p>
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