import React from "react";
import { useSelector } from "react-redux";


function SideBar () {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    
    if(!isMenuOpen) return null;
    return (
        <div className="col-span-1 p-1 shadow-lg text-center">
            <ul className="font-bold">
                <li>Home</li>
                <li>Shorts</li>
                <li>Live</li>
                <li>Videos</li>

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