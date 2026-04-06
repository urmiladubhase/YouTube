import React from 'react'
import { YOUTUBE_LOGO, MENU, USER_ICON } from '../utils/constants'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-4 m-2 items-center' >
        {/*LEFT SECTION */}
            <div className='flex col-span-1'>
                <img alt='menu' className="h-8" src={MENU}/>            
                <img alt='logo' className="h-8 mx-2" src={YOUTUBE_LOGO} /> 
            </div>
        {/*MIDDLE SECTION */}
        <div className='col-span-10 '>
            <input type='Text' className='border border-black rounded-l-full w-1/2  p-2 '></input>
            <button className='border border-black rounded-r-full p-2 bg-gray-300'>🔍</button>
        </div>
         {/*RIGHT SECTION */}
            <div className='col-span-1'>
                <img alt='usericon' className="h-8" src={USER_ICON} />
            </div>


    </div>
  )
}

export default Header