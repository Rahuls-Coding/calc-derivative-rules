/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Group from '../components/group'


function Others() {
  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2'>
        <div className='m-10 sm:w-5/12 border border-gray-300 p-4 text-sm grid content-center rounded-md'>
        <div>If you want of look at examples of each rule defined here, then click the button. Make sure to click on the rules to learn more! </div>
        <button className='w-12 rounded grid py-1 px-2 bg-gray-200 justify-self-end'> <a href='https://www.craft.do/s/WVg5CO7LUtsjO3' target="_blank" rel="noreferrer">Here</a></button>
        </div>
      <div className='text-3xl pb-14'>
            Other Rules/Derivatives
          </div>
          <div className="grid sm:grid-cols-2 gap-4"> 
          <Group text='Logarithmic Differentiation' color='pink' svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="box"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /> </svg>}
            text2={
              <div className='grid'>
                These are the formulas to solving logarithmic differentiation:
                <div className='flex justify-self-center'>
                  <img src='/log1.png' height='10' width='100' className='py-4 self-center' alt='formula'/> <div className='self-center px-1'>or</div><img src='/log2.png' height='10' width='150' className='py-4 self-center' alt='formula'/>
                </div>
                Only natural logarithms will be on the AP exam.
              </div>
            }
        />
          <Group text='Trigonometric Functions' color='orange' svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="box"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>}
            text2={
              <div className='grid overflow-auto  h-72'>
                Here are the deriatives of the common trig functions: 
                <div className='flex justify-self-center'>
                  <img src='/trig1.png' height='10' width='150' className='py-4 self-center' alt='formula'/> 
                </div>
                Here are the derviatves of the common trig functions with their inverses: (Make sure to keep scrolling near text)
                <div className='flex justify-self-center '>
                  <img src='/trig2.png' height='10' width='150' className='py-4 self-center' alt='formula'/> 
                </div>
                Remember that for inverse trig functions, arcsin(x) does NOT equal 1 over sin(x). 
              </div>
            }
        
        />
          <Group text='Exponential Functions' color='blue' svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="box"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>}
            text2={
              <div className='grid overflow-auto'>
                  This is the formula to the derivative of e to the power of x (but in this case instead of x it&#39;s u)
                <div className='flex justify-self-center'>
                  <img src='/expo1.png' height='10' width='150' className='py-4 self-center' alt='formula'/> 
                </div>
                This would be the formula to the derivative of a (any term) to the power of x.
                <div className='flex justify-self-center '>
                  <img src='/expo2.png' height='10' width='160' className='py-4 self-center' alt='formula'/> 
                </div>
              </div>
            }
        />
          <Group text='Common Derivatives' color='green' svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="box"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>}
            text2={
              <div className='grid overflow-auto'>
                One of the most important derivative to know is the derivative of a constant and that&#39;ll always be equal to zero.
                <div className='flex justify-self-center'>
                  <img src='/common1.png' height='10' width='150' className='py-4 self-center' alt='formula'/> 
                </div>
                  Another common derivative is the derivative of x, which is equal to 1.
                <div className='flex justify-self-center '>
                  <img src='/common2.png' height='10' width='150' className='py-4 self-center' alt='formula'/> 
                </div>
              </div>
            }
        />
          </div>
          <Link href='/' className='m-8 w-max rounded-sm bg-[#66B598] py-2 px-6 text-white text-sm'>Go Back</Link>
    </div>
  )
}

export default Others