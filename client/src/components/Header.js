import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function Header() {
    const style = {
        color: "white"
    };
        return (
            <nav>
                <div className="row">
                    <div className="col">
                        <h1>Kids At Home</h1>
                        <ul className="nav-links">
                            <Link style={style} to="/Crafts">
                                <li>Crafts</li>
                            </Link>
                            <Link style={style} to="/Pyschomotricity">
                                <li>Pyschomotricity</li>
                            </Link>  
                            <Link style={style} to="/Educational">
                                <li>Educational Resources</li>
                            </Link>
                            <Link style={style} to="/Music">
                                <li>Music</li>
                            </Link>
                            <Link style={style} to="/Recipes">
                                <li>Recipes</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col">
                        <Link to="/addResource"><button className="btn btn-info">Share an idea!</button></Link>
                    </div>
                </div>
            </nav>
        ) 
}

export default Header;