//react doesn't use "require" method. Below is how we import packages
import React from "react";
import ReactDom from "react-dom";

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
//ReactDom binds funciton to browser and renders. takes two args - what to render and where to render it
ReactDom.render(
    // React.createContext("h1", null, "does this work?")
        //OR
    // <h1>Hi there</h1>,
        // h1's aren't html, it's jsx (javascript xml). Syntactical sugar for normal Js functions such as above
    <Greeting />,//must always close self closing tags and two things on the same level must be wrapped in a parent
    document.getElementById("root")
);

