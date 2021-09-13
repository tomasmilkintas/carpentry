import React from "react";
import "./Navbar.css";
import woodworkLogo from "../assets/wood.jpeg";

const Navbar = () => {
    return (
        <div className="navbar" id="top">
            <div className="logoContainer">
                {/* <img className="logo" src={woodworkLogo} alt="logo" /> */}
                <h2 className="logoHeading">Vacys Milkintas</h2>
            </div>
            <div className="navArea">
                <nav>
                    <ul className="navLinks">
                        <a href="#home" className="navLink">
                            Home
                        </a>
                        <a href="#main" className="navLink">
                            Specialties
                        </a>
                        <a href="#contactUs" className="navLink">
                            Contact us
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
