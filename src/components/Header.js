import React, { useEffect, useState } from 'react'
import { YOUTUBE_LOGO, MENU, USER_ICON, YOUTUBE_EARCH_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState(" ");
    useEffect(()=>{
         console.log(searchQuery);
    
         setTimeout(() => getSearchSuggestion(), 200);
    },[searchQuery]);
   
    const getSearchSuggestion = async() =>{
       const data =  await fetch(YOUTUBE_EARCH_API+searchQuery);
       const json =  await data.json();
       console.log(json);
    }

    const dispatch = useDispatch(); 

    const toggleMenuHandler= () => {
        dispatch(toggleMenu());
    };
    
  return (
    <div className='grid grid-flow-col p-4 m-2 items-center shadow-lg ' >
        {/*LEFT SECTION */}
            <div className='flex col-span-1'>
                <img  onClick={() => toggleMenuHandler()} alt='menu' className="h-8 cursor-pointer" src={MENU}/>            
                <img alt='logo' className="h-8 mx-2" src={YOUTUBE_LOGO} /> 
            </div>
        {/*MIDDLE SECTION */}
        <div className='col-span-10 '>
            <input type='Text' className='border border-black rounded-l-full w-1/2  p-2 ' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}></input>
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