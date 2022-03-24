import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

export default function Message() {
  const [result, setResult] = useState('')

  async function handleClick(){
    try {
        //const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/message`)
        const response = await axios.get('http://127.0.0.1:8000/api/message');
        console.log(response);
        setResult(response.data)
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <>
      <Head>
        <title>Campaign Manager | Home</title>
      </Head>
      <div className="flex justify-center">
        <main className="w-full max-w-3xl xl:max-w-7xl space-y-4">
          <h1>Quick Maths</h1>
          <div className="flex justify-between bg-[#21262b] cursor-pointer p-4">

            <div className="">
              <p>Result = {result}</p>
            </div>

            <div className="ml-auto ">
              <button
                className="bg-yellow-400 p-4 text-green-500"
                onClick={() => handleClick()}
              >
                FETCH
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}