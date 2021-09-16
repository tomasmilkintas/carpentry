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
                    <h1>Get in touch</h1>
                    <hr />
                </div>
                <div className="contactDetails">
                    <p>
                        &#183; <span>Email:</span> milkv60@hotmail.com &#183;
                    </p>
                    <p>
                        &#183; <span>Contact No:</span> +447818443629 &#183;
                    </p>
                    <p>
                        &#183; Based in <span>London, SE area</span> &#183;
                    </p>
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
