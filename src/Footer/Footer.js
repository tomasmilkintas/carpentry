import React from "react";
import "./Footer.css";
import imgBG from "./../assets/woodBg.jpeg";
// import wave from "./../assets/wave.svg";
// import map from "./../assets/londonMap.png";

const Footer = () => {
    return (
        <div className="footer" id="contactUs">
            <img src={imgBG} alt="background" className="bgImg" />

            <div className="contactInfo">
                <div>
                    <p>Email: milkv60@hotmail.com</p>
                    <p>Contact No: 07818443629</p>
                    <p>Based in London, SE area</p>
                </div>
                <div className="copyright">
                    <hr />
                    <p>
                        &#169; 2021 &#183; Made by{" "}
                        <span>
                            <a href="https://tommi.netlify.app/" target="_blank" rel="noreferrer">
                                Tomas Milkintas
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
