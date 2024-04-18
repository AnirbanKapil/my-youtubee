import React from "react";

function Button ({list}) {
    return (
        <div>
            <button className="m-2 p-2 bg-slate-300 rounded-md">{list}</button>
        </div>
    )
};

export default Button;