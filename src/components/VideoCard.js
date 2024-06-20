
import React from 'react'

function VideoCard({info}) {

    
    
    const{snippet,statistics} = info
    
    
    
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