import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
           <nav>
                <li><Link to='/'>Users</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/todo'>Todo</Link></li>
           </nav>
    );
};

export default Navbar;
