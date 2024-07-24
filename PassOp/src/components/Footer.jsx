import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="con  bg-slate-800 w-full gap-5 flex justify-between items-center px-4 h-11 py-5">
    <div className="logo font-bold text-white text-2xl">
            <span className='text-green-700 '>&lt; </span>
            Pass
            <span className='text-green-700'>OP/&gt;</span>
        </div>
    <div className=' text-white flex gap-3 h-5'>Created with <img className='h-5 invert' src="/icons/heart.svg" alt="heart" />by Muskann</div></div>
    </>
  )
}

export default Footer