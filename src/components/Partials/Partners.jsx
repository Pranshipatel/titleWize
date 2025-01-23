import React from 'react'
import '../css/Partners.css'
import { FaRegCopyright } from "react-icons/fa6";


const Partners = () => {
  return (
    <div className='partners w-full h-[80vh] flex items-center justify-evenly flex-col gap-14 '>
      <div className="partners-top text-[4vw] sm:text-[2vw] font-semibold w-[90%] sm:w-[55vw] flex justify-between items-center px-5">
        <h1 className='partners-top'>Partnered with </h1>
        <span>|</span>
        <img src="260.png" className='partner-logo h-[13vh] sm:h-[10vh]' alt="Partner Logo" />
      </div>
      <div className="partners-top-2 p-6 sm:p-8 w-[90%] sm:w-[50vw] border-[1.9px] border-gray-800 flex flex-col justify-center items-center bg-white">
        <h1 className="text-[20px] sm:text-[24px] font-bold text-gray-900 leading-[1.3] max-w-[800px] text-center">
          Revolutionize how you assess risks for your real estate deals.
        </h1>

        <div className="mt-6">
          <button className="px-6 py-2.5 bg-[#EF4444] text-white rounded text-base font-medium hover:bg-red-600 transition-colors">
            Request Access
          </button>
        </div>

        <div className="mt-12 sm:mt-16 flex items-center gap-3">
          <p className="text-sm sm:text-base text-gray-900">Want to see the product in action?</p>
          <button className="px-4 py-2 border border-gray-200 rounded text-sm sm:text-base text-gray-900 hover:bg-gray-50 transition-colors">
            Book a demo
          </button>
        </div>
      </div>

      <div className="footer w-full flex justify-between items-center p-6  text-[0.9vw] text-[#575757]">
        <h5 className='flex items-center gap-1'><FaRegCopyright />Litigrit Technologies Pvt. Ltd. All right reserved.</h5>
        <div className="flex gap-6">

          <h5>Terms</h5>
          <h5>Privacy</h5>
        </div>
      </div>
    </div>
  )
}

export default Partners;
