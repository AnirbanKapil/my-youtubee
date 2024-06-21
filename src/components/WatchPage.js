import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments'

function WatchPage() {
  
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("v"))   
  const dispatch = useDispatch()  
     
  useEffect(()=>{
     dispatch(closeMenu());
  },[])  

  return (
    <div className='flex flex-col'>
    <div className='p-4 m-4'>
        <iframe width="960" height="515" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
         title="YouTube video player" frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
       <Comments />
    </div>
  )
}

export default WatchPage