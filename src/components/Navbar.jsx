import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleDOMLoaded = () => {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        };

        document.addEventListener('DOMContentLoaded', handleDOMLoaded);

        return () => {
            document.removeEventListener('DOMContentLoaded', handleDOMLoaded);
        };
    }, []);

    return (
        <div className="wrapper">
            <div className="first-part">
                <nav className="navbar">
                    <div className="logo">
                        <img src="src\components\Images\logo.png" alt="Logo" />
                    </div>
                    <div className="hamburger" id="hamburger" onClick={handleHamburgerClick}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/products" className="nav-link">Products</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                    </ul>
                    <ul className="nav-links-desktop">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/products" className="nav-link">Products</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="media">
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><i className="fa fa-instagram" style={{ color: 'rgb(240, 35, 148)' }}></i></li>
                        <li><a href=""><i className="fa fa-envelope" style={{ color: 'red' }}></i></a></li>
                        <li><a href="https://wa.me/919219998403"><i className="fa fa-whatsapp" style={{ color: 'rgb(0, 247, 12)' }}></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
