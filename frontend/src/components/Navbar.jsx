
import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/home" className="active">Home</a>
            <a href="#saints">Saints</a>
            <a href="/mary">Mary</a>
            <a href="#jesus">Jesus</a>
            <a href="#about-us">About Us</a>
        </nav>
    );
};

export default Navbar;
