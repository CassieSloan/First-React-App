import React from "react";

//functional componant or simple componant. a single function or class
//must produce html or null
const Greeting = () => {
    // return <p>Bonjour!</p>; 
    return (
        //if you don't want to wrap in a div, use a shard = <> and </>
        <div> 
            <p>Hello!</p>
            <p>I love you</p>
            <p>won't you tell me your name</p>
        </div>
    )
    //in order to format with multiple lines, jsx must be wrapped in ()
}

export default Greeting;