import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
           <nav>
                <li><Link to='/'>Users</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><a href='/todo'>Todo</a></li>
           </nav>
    );
};

export default Navbar;
