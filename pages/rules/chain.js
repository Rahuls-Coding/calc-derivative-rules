/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'



function chain() {
  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2'>
      <Head>
        <title>Chain Rule</title>
      </Head>
          <div className='mt-10 w-fit border border-gray-300 p-4 text-sm flex items-center rounded-md'>
              Scroll <p className='px-1 font-bold'>near</p> the text to view everything. (This example is a long one)
          </div>
      <div className='text-3xl pt-8 pb-12'>
            Chain Rule
          </div>
          <div className="grid sm:w-6/12 w-10/12 overflow-auto px-8"> 
              Below is the formula to chain rule: 
              <img src='/chain.png' height='10' width='250' className='py-4 justify-self-center' alt='formula'/>
              <div className=''>
                If you look closely we are basically taking the derivative of a composite function. Now there&#39;s a simpler method to applying the chain rule, which is to imagine g(x) as u. This is method is easier to understand through solving an example like the one shown below. 
              </div>
              <div className='pt-4'>
                  For example, 
              </div>
              <img src='/chain2.png' height='10' width='150' className='py-4 justify-self-center' alt='image2' />
              As you can see we are sepearting the function into simpler terms of y and u. In this case g(x), or u, is (2x cubed + 2x), and y is u squared (remember we are subsituting u for g(x)). We&#39;ll then take the derivative of both y and u. 
              <img src='/chain3.png' height='10' width='100' className='py-4 justify-self-center' alt='image2' />
              After taking the derivative, like mentioned in the formula, we&#39;ll multiply the two. Remember that f&#39;(g(x)) is u&#39; and g&#39;(x) is y&#39;. 
              <img src='/chain4.png' height='10' width='100' className='py-4 justify-self-center' alt='image2' />
              But remember, in our final equation we can&#39;t have the answer in terms of u, so instead we&#39;ll subsitute u for what we defined earlier, which was x square + 2x, and all we have to do then is simplify.
              <img src='/chain5.png' height='10' width='150' className='py-4 justify-self-center' alt='image2' />
          </div>
          <Link href='/' className='mt-8 mb-16 w-max rounded-sm bg-[#66B598] py-2 px-6  text-white text-sm'>Go Back</Link>
    </div>
  )
}

export default chain