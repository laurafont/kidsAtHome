import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
    const style = {
        color: "white"
    };
        return (
            <nav>
                <div className="row">
                    <div className="col-3 mt-3">
                        <Link className="homeLinks" to="/" style={{ textDecoration: 'none' }}><h1 className="display-4 ml-3">Kids at Home</h1></Link>
                    </div>
                    <div className="col-6 mt-3">
                    <ul className="nav-links">
                            <Link style={style} to="/categories/1">
                                <li>Crafts</li>
                            </Link>
                            <Link style={style} to="/categories/2">
                                <li>Pyschomotricity</li>
                            </Link>  
                            <Link style={style} to="/categories/3">
                                <li>Educational Resources</li>
                            </Link>
                            <Link style={style} to="/categories/4">
                                <li>Music</li>
                            </Link>
                            <Link style={style} to="/categories/5">
                                <li>Recipes</li>
                            </Link>
                        </ul>
                        </div>
                    <div className="col-3 mt-4">
                        <Link to="/addResource"><button className="btn btn-light m-2 p-2"><span className="share">Share an idea!</span></button></Link>
                        <Link to="/signup"><button className="btn btn-light m-2 p-2"><span className="share">Sign up</span></button></Link>
                    </div>
                </div>
            </nav>
        ) 
}

export default Header;