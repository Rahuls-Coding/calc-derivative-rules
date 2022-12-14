import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2'>
      <div className='text-3xl sm:pb-20 p-10'>
        Derivative Rules
      </div>
      <div className='grid sm:grid-cols-3 gap-4 overflow-auto'>
      <Link href="/rules/constant" >
        <div className='bg1 w-72 h-40 rounded-md text-white flex'>
          <div className='pl-4 self-end pb-6'>
            Constant Multiple Rule
          </div>
          </div>
        </Link>
        <Link href="/rules/power" >
        <div className='bg2 w-72 h-40 rounded-md text-white flex'>
          <div className='pl-4 self-end pb-6'>
            Power Rule
          </div>
          </div>
        </Link>
        <Link href="/rules/product" >
        <div className='bg3 w-72 h-40 rounded-md text-white flex'>
          <div className='pl-4 self-end pb-6'>
            Product Rule
          </div>
          </div>
        </Link>
        <Link href="/rules/quotient" >
        <div className='bg4 w-72 h-40 rounded-md text-white flex'>
          <div className='pl-4 self-end pb-6'>
            Quotient Rule
          </div>
          </div>
        </Link>
        <Link href="/rules/chain" >
        <div className='bg5 w-72 h-40 rounded-md text-white flex'>
          <div className='pl-4 self-end pb-6'>
            Chain Rule
          </div>
          </div>
        </Link>
        <Link href="/others" >
        <div className='bg6 w-72 h-40 rounded-md text-white flex'>
          <div className='pl-4 self-end pb-6'>
            Others
          </div>
        </div>
        </Link>
      </div>
        <button className="flex sm:mt-10 m-3 h-auto w-fit p-2 rounded-3xl text-sm border border-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <p className=' px-2'>Built By Rahul R.</p>
        </button>
    </div>
  )
}
