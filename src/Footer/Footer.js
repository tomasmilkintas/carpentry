import React from "react";
import "./Footer.css";
import imgBG from "./../assets/woodBg.jpeg";

const Footer = () => {
    return (
        <div className="footer" id="contactUs">
            <img src={imgBG} alt="" className="bgImg" />

            <div className="contactInfo">
                <p>Email: xxxx@live.co.uk</p>
                <p>Contact No: 07818443629</p>
                <p>Based in London SE area</p>
            </div>
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
