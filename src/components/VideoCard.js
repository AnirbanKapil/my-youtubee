
import React from 'react'

function VideoCard({info}) {

    console.log(info)
    
    const{snippet,statistics} = info
    console.log(snippet , statistics) 
    
    
    const {channelTitle,title,thumbnails} = snippet


    return (
    
    <div className='p-2 m-2 w-60 shadow-xl'>
        <img className='rounded-lg' alt='img' src={thumbnails?.medium?.url}/>
        <ul>
            <li className='font-bold py-2'>{channelTitle}</li>
            <li className='font-medium'>{title}</li>
            <li>{statistics.viewCount } views</li>
        
            
        </ul>
     </div>
      
    )
}

export default VideoCard