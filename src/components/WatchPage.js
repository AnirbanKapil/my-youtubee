import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentComponent from './CommentComponent'
import LiveChat from './LiveChat'

function WatchPage() {
  
  const [searchParams] = useSearchParams()
   
  const dispatch = useDispatch()  
     
  useEffect(()=>{
     dispatch(closeMenu());
  },[])  

  return (
    <div className='flex flex-col w-full'>
    <div className='p-4 m-2 flex'>
        <div className=''> 
        <iframe width="900" height="515" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
         title="YouTube video player" frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>
         <div className='w-full'>
          <LiveChat />
         </div>
    </div>
       <CommentComponent />
    </div>
  )
}

export default WatchPage