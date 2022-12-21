/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function product() {
  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2'>
      <Head>
        <title>Product Rule</title>
      </Head>
      <div className='text-3xl sm:pb-14 p-10'>
            Product Rule
          </div>
          <div className="grid w-5/12"> 
              Below is the formula to the product rule: 
              <img src='/product.png' height='10' width='300' className='py-4 justify-self-center' alt='formula'/>
              <div className=''>
              Just remember the order of these terms isn&#39;t important because it&#39;s addition, however, this won&#39;t be the same case for the quotient rule. All we&#39;re doing here is taking the derivative of one of the terms and multiplying it by another regular term and vice versa.              </div>
              <div className='pt-4'>
                  For example, 
              </div>
              <img src='/product2.png' height='10' width='300' className='pt-4 pb-1 justify-self-center' alt='image2' />
              <img src='/product3.png' height='10' width='200' className='pb-4 pt-1 justify-self-center' alt='image3' />
              This example follows the exact setup as the formula given above as f(x) is the first term, 4x squared and g(x) would be the second term, 7x cubed.          </div>
          <Link href='/' className='m-8 w-max rounded-sm bg-[#66B598] py-2 px-6 text-white text-sm'>Go Back</Link>
    </div>
  )
}

export default product