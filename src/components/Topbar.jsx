import React from 'react';
import logo from '../assets/logo.png'

const Topbar = () => {
  return (
    <div className='flex flex-row justify-between py-3 text-3xl mb-10 px-5 w-full'>
      <div>
        <img src={logo} className='w-[50px] h-[50px]' alt="Logo" />
      </div>
      <div>Zeke</div>
      <div><a href="https://github.com/Zeeke12/aisumz">Github</a></div>
    </div>
  )
}

export default Topbar