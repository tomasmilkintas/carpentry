import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer" id="contactUs">
            <div className="contactInfo"></div>
            <div className="footerLogo">
                <a href="top">TOP</a>
            </div>
            <div className="footerMap">
                <img
                    src="https://www.logicdesign.co.uk/wp-content/uploads/retro-google-map-860x512.jpg"
                    alt="google maps"
                    className="mapImg"
                />
            </div>
        </div>
    );
};

export default Footer;
