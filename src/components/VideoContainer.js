import React, { useEffect } from "react";
import { API_CALL } from "../utils/constants";


function VideoContainer () {

    useEffect(()=>{
        getVideos()
    },[])

    const getVideos = async () => {
        const data = await fetch(API_CALL);
        const json = await data.json();
        console.log(json);
    }

    return (
        <div>
            <h1>VideoContainer</h1>
        </div>
    )
};

export default VideoContainer;