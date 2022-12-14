/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'


function quotient() {
  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2'>
      <div className='text-3xl sm:pb-14 p-10'>
            Quotient Rule
          </div>
          <div className="grid sm:w-5/12 w-8/12 overflow-auto"> 
              Below is the formula to the quotient rule: 
              <img src='/quotient.png' height='10' width='250' className='py-4 justify-self-center' alt='formula'/>
              <div className=''>
                This rule is very similar to the product rule but with some small changes. As you may see, the numerator looks very fimilar to the product rule but the sign has changed from addition to subtraction. Try not to switch the terms or else that could cause mistakes due to the negative sign on the second term. In addition, we are now dividing the whole thing by g(x) squared. 
              </div>
              <div className='pt-4'>
                  For example, 
              </div>
              <img src='/quotient2.png' height='10' width='250' className='py-4 justify-self-center' alt='image2' />
              In this example, we are taking the derivative of f(x), which is 3x squared, multilying it by g(x), (x+1) and then subtracting it by g&#39;(x), 1, multiplyed by f(x), x cubed. Then we&#39;re dividing the whole thing by g(x), (x+1) sqaured and simplify. 
          </div>
          <Link href='/' className='m-8 w-max rounded-sm bg-[#66B598] py-2 px-6 text-white text-sm'>Go Back</Link>
    </div>
  )
}

export default quotient