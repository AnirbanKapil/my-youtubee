import React from "react";


function Header () {
    return (
        <div className="grid grid-flow-col shadow-lg">
            <div className="flex col-span-1">
            <img className="w-9" alt="menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" />
            <img alt="logo" className="w-28 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXVI2ps2AssNUmZBvJ1aqgdVJhhCXBUcb8SRRkF6I5g&s" />
            </div>
            <div className="text-center mt-4 col-span-10">
             <input type="text" className="border border-solid w-1/2 h-6 mt-4 rounded-full"></input>
             <button className="mb-2 ml-2 rounded-full shadow-md p-1 w-10"><img alt="search icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ-9p_OWmJRZAJSGt8H2xNEWEsjR5T8sGw7uZ0pZVTg&s"/></button>   
            </div>
            <div>
              <img alt="user Icon" className="w-16 mt-5 col-span-1" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" />

            </div>
        </div>
    )
}


export default Header;