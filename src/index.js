//react doesn't use "require" method. Below is how we import packages
import React from "react";
import ReactDom from "react-dom";

//ReactDom binds funciton to browser and renders. takes two args - what to render and where to render it
ReactDom.render(
    // React.createContext("h1", null, "does this work?")
        //OR
    <h1>Hi there</h1>,
    // h1's aren't html, it's jsx (javascript xml). Syntactical sugar for normal Js functions such as above
    document.getElementById("root")
);
