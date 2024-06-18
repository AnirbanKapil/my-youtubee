import React, { useEffect, useState } from "react";
import { API_CALL } from "../utils/constants";
import VideoCard from "./VideoCard";


function VideoContainer () {

    const [videos,setVideos] = useState([]);
    

    useEffect(()=>{
        getVideos()
    },[])

    
    

    const getVideos = async () => {
        const data = await fetch(API_CALL);
        const json = await data.json();
        console.log(json.items)
        setVideos(json.items)
    }

    

    return (
        <div className="flex flex-wrap">
            {/* <VideoCard info={videos[0]} /> */}
            {videos.map((video)=> (<VideoCard key={video.id}  info={video}/>))}
        </div>
    )
};

export default VideoContainer;