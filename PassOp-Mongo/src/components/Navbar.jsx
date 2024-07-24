import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 h-20 py-5">
        <div className="logo font-bold text-white text-2xl">
            <span className='text-green-700 '>&lt; </span>
            Pass
            <span className='text-green-700'>OP/&gt;</span>
        </div>
        <ul>
            <li className='flex gap-6'>
                <a className='hover:font-bold text-xl' href="/">Home</a>
                <a className='hover:font-bold text-xl' href="/about">About Us</a>

            </li>
        </ul>

      <button>
      <img className='h-10 invert ' src="/icons/github-brands-solid.svg" alt="github" />

      </button>
       
        </div>
    </nav>
  )
}

export default Navbar