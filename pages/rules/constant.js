/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'


function constant() {
  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2'>
      <div className='text-3xl pb-14'>
            Constant Multiple Rule
          </div>
          <div className="grid w-5/12"> 
              Below is the formula to constant multiple rule: 
              <img src='/constant.png' height='10' width='200' className='py-4 justify-self-center' alt='formula'/>
              <div className=''>
              To put it into simpler terms, all we have to do is take the derivative of the term but take the coefficient and keep it constant and multiply that coefficient by the derivative.              </div>
              <div className='pt-4'>
                  For example, 
              </div>
              <img src='/constant2.png' height='10' width='200' className='py-4 justify-self-center' alt='image2' />
              Here, like mentioned above, we are taking the coefficient, in this case it&#39;s 3, and then taking the derivative of the term and then multiplying 3 with the differentiated term.
          </div>
          <Link href='/' className='m-8 w-max rounded-sm bg-[#66B598] py-2 px-6 text-white text-sm'>Go Back</Link>
    </div>
  )
}

export default constant