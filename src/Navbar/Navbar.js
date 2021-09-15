import React, { useContext, useState } from "react";
import "./Navbar.css";

import { GiHammerNails } from "react-icons/gi";
import { GlobalContext } from "../App";

const Navbar = () => {
    const global = useContext(GlobalContext);

    const [shown, setShown] = useState(false);

    const toggleNav = () => {
        setShown(!shown);
    };

    return (
        <div>
            <div className="navbar" id="top">
                <div className="logoContainer">
                    <h2 className="logoHeading">Vacys Milkintas</h2>
                </div>
                <div className="navArea">
                    {!global.mobileView && !global.ipadView && (
                        <nav>
                            <ul className="navLinks">
                                <a href="#home" className="navLink">
                                    Home
                                </a>
                                <a href="#main" className="navLink">
                                    Services
                                </a>
                                <a href="#contactUs" className="navLink">
                                    Contact us
                                </a>
                            </ul>
                        </nav>
                    )}
                    <GiHammerNails
                        size={global.mobileView ? "1.5rem" : "2rem"}
                        className="hammerLogo"
                        onClick={toggleNav}
                    />
                </div>
            </div>
            {shown && (global.mobileView || global.ipadView) && (
                <div className="navAreaCol">
                    <nav>
                        <ul className="navLinksCol">
                            <a href="#home" className="navLinkCol">
                                Home
                            </a>
                            <a href="#main" className="navLinkCol">
                                Services
                            </a>
                            <a href="#contactUs" className="navLinkCol">
                                Contact us
                            </a>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
