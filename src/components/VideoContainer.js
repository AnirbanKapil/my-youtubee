import React, { useEffect, useState } from "react";
import { API_CALL} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


function VideoContainer () {

    const [videos,setVideos] = useState([]);
    

    useEffect(()=>{
        getVideos()
        
    },[])

    
    
    const getVideos = async () => {
        const data = await fetch(API_CALL);
        const json = await data.json();
        
        setVideos(json.items)
    }

    

    return (
        <div className="flex flex-wrap">
            
              {videos.map((video)=> (
                <Link key={video.id}  to={"/watch?v="+video.id}>
                <VideoCard  info={video}/>
                </Link>))}
        </div>
    )
};

export default VideoContainer;