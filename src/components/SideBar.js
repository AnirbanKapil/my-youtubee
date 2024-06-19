import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function SideBar () {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    
    if(!isMenuOpen) return null;
    return (
        <div className="col-span-1 p-1 shadow-lg text-center w-36 mt-4 mr-4">
            <ul className="font-bold">
                <li className="my-2"><Link to={"/"}>Home</Link></li>
                <li className="my-2">Shorts</li>
                <li className="my-2">Live</li>
                <li className="my-2">Videos</li>

            </ul>
            
            <h2 className="font-bold pt-4">Subscrption</h2>
            <ul>
                <li>Music</li>
                <li>Sportz</li>
                <li>Gaming</li>
                <li>Movies</li>

            </ul>
            <h2 className="font-bold pt-4">Watch Later</h2>
            <ul>
                <li>Music</li>
                <li>Sportz</li>
                <li>Gaming</li>
                <li>Movies</li>

            </ul>
        </div>
    )
};

export default SideBar;