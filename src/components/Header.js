import  { useEffect, useState } from 'react'
import { YOUTUBE_LOGO, MENU, USER_ICON, YOUTUBE_SEARCH_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { addSearchResults } from '../utils/resultsSlice';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState(" ");
    const [suggestion, setSuggestion] = useState([]);
    const [showSugestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch(); 
    //const [searchResults, setSearchResults] =useState([]);
    useEffect(()=>{
    
        const timer = setTimeout(() => getSearchSuggestion(), 200);
         return()=> {clearTimeout(timer)};
         
    },[searchQuery]);
     
   
    const getSearchSuggestion = async() =>{
        //console.log(searchQuery);
       const data =  await fetch(YOUTUBE_SEARCH_API+searchQuery);
       const json =  await data.json();
       setSuggestion(json[1]);
        dispatch(addSearchResults(json[1]));
       
      //console.log(json);
    }

   
 
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
            <div><input type='Text' className='border border-black rounded-l-full w-1/2  p-2 ' value={searchQuery} 
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e)=> setShowSuggestions(false)}

            
            ></input>
            <button className='border border-black rounded-r-full p-2 bg-gray-300'>🔍</button>
       </div>
       {showSugestions && (<div className=' fixed  w-1/2 border-gray-200 rounded-lg p-2 bg-gray-100 '>
        <ul>
            {suggestion.map(s=> <li key={s} className='hover:bg-gray-200 px-3 py-2 shadow-sm'> 🔍 {s}</li>
        )}</ul>
       </div>)}
       
       </div>
         {/*RIGHT SECTION */}
            <div className='col-span-1'>
                <img alt='usericon' className="h-8" src={USER_ICON} />
            </div> 


    </div>
  )
}

export default Header