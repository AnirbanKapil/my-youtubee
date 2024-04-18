import React from "react";
import Button from "./Button";
function ButtonList () {

    const btnList = ["All","Games","Movies","Live","Songs","Cooking","Scores","Trending","Shorts","Breaking","Football"]

    return (
        <div className="flex">
            {btnList.map((btn) => <Button list={btn} />)}
        </div>
    )
};


export default ButtonList;