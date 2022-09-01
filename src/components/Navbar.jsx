import React from "react";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />

            <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type='search' placeholder='Search' />
            </div>

            <div className="nav-icon">
                <i className="fa-solid fa-house-chimney"></i>
                <i className="fa-regular fa-message"></i>
                <i className="fa-regular fa-compass"></i>
                <i className="fa-regular fa-heart"></i>
            </div>
        </nav>
    )
}