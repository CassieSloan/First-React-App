//react doesn't use "require" method. Below is how we import packages
import React from "react";
import ReactDom from "react-dom";
import Greeting from "./componants/Greeting";
import App from "./componants/App";


//ReactDom binds funciton to browser and renders. takes two args - what to render and where to render it
ReactDom.render(
    // React.createContext("h1", null, "does this work?")
        //OR
    // <h1>Hi there</h1>,
        // h1's aren't html, it's jsx (javascript xml). Syntactical sugar for normal Js functions such as above
    <App />,//must always close self closing tags and two things on the same level must be wrapped in a parent
    document.getElementById("root")
);

