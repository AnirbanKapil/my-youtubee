import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

function Header () {
    
    const [searchQuery,setSearchQuery] = useState("")
    const [suggestion,setSuggestion] = useState([]);
    const[showSuggestion,setShowSuggestion] = useState(false)

    const dispatch = useDispatch();
    
    const searchCache = useSelector((store)=> store.search)

    
    useEffect(()=>{
       const timer = setTimeout(()=>{
        if(searchCache[searchQuery]){
            setSuggestion(searchCache[searchQuery])
        }else{
            getSearchSugst()
        }
        },200);
       
    return (()=>{
            clearTimeout(timer)
       })
       },[searchQuery])
    


    const getSearchSugst = async () => {
        
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const search = await data.json()
        console.log(searchQuery)
        setSuggestion(search[1])

        dispatch(cacheResults({
            [searchQuery] : search[1]
        }))
    }
    
    
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
        
    return (
        <div className="">
        <div className="grid grid-flow-col shadow-lg  ">
            <div className="flex col-span-1 ">
            <img onClick={()=>{toggleMenuHandler()}}
            className="w-9 ml-2 cursor-pointer" alt="menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" />
            <img alt="logo" className="m-1 w-28 h-20 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXVI2ps2AssNUmZBvJ1aqgdVJhhCXBUcb8SRRkF6I5g&s" />  
            </div>
            <div className=" mt-4 col-span-10">
            <div className="ml-10">  
             <input type="text" 
             className="px-5 border border-solid w-1/2 h-6 mt-2 rounded-full"
             value={searchQuery}
             onChange={(e)=> setSearchQuery(e.target.value)}
             onFocus={()=> setShowSuggestion(true)}
             onBlur={()=> setShowSuggestion(false)}
             ></input>
             <button className=" ml-2 rounded-full shadow-md p-1 w-8"><img alt="search icon" src="https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons-thumbnail.png"/>    </button>
            </div>    
            {showSuggestion && <div className="ml-12 absolute bg-slate-100 py-2 px-5 w-[26rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {suggestion.map((sugg)=> 
                     <li  
                     key={sugg}
                     className="py-2 shadow-sm cursor-context-menu hover:bg-gray-200">👀  {sugg}</li>
                    )}
                   </ul>
            </div>}
            </div>
            <div>
              <img alt="user Icon" className="w-16 mt-5 col-span-1" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" />

            </div>
        </div>
    </div>  
    )
 }


export default Header;