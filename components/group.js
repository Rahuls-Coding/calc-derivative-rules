import React from 'react'


function Group({ svg, text, color, text2 }) {
    const [showModal, setShowModal] = React.useState(false);


  return (
    <div>
    <button  onClick={() => setShowModal(true)}>
      <div className='flex justify-items-center p-4'>
          <div className={color}>      
            {svg}
        </div>
        <div className='text'>
              <p className='self-center'>{text}</p>
        </div>
      </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-8 pb-2 px-5 rounded-t">
                  <h3 className="text-2xl">
                   {text}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4  text-md leading-relaxed">
                   {text2}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6  rounded-b">
                  
                  <button
                    className="w-max rounded-sm bg-[#66B598] py-2 px-6 text-white text-sm"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default Group