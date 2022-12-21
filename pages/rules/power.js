/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function power() {
  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2'>
      <Head>
        <title>Power Rule</title>
      </Head>
      <div className='text-3xl pb-14'>
            Power Rule
          </div>
          <div className="grid w-5/12"> 
              Below is the formula to power rule: 
              <img src='/power.png' height='10' width='200' className='py-4 justify-self-center' alt='formula'/>
              <div className=''>
                What this rule is saying is we are taking the power of the term, multilying it by that number, n, then decreasing that power by 1. 
              </div>
              <div className='pt-4'>
                  For example, 
              </div>
              <img src='/power2.png' height='10' width='200' className='py-4 justify-self-center' alt='image2' />
              In this case the power of the term x is 6. We are taking 6 and then multiplying it to the term. We are then decreasing it&#39;s original power of 6 by 1, which leads to 5. Hence we get that answer. 
          </div>
          <Link href='/' className='m-8 w-max rounded-sm bg-[#66B598] py-2 px-6 text-white text-sm'>Go Back</Link>
    </div>
  )
}

export default power