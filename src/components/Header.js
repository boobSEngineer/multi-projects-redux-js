import React from "react";
import {Link} from "react-router-dom";

import h from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <h2>Switch project( ͡° ͜ʖ ͡°)</h2>
            <div className={h.switch}>
                <Link to="/">Home</Link>
                <Link to="/diagram">Diagram</Link>
                <Link to="/convertor">Convertor</Link>
                <Link to="/error">Error practice</Link>
                <Link to="/posts">Posts with js</Link>
            </div>
        </header>
    )

}

export {Header};
