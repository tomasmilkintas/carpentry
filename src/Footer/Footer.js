import React from "react";
import "./Footer.css";
import imgBG from "./../assets/woodBg.jpeg";

const Footer = () => {
    return (
        <div className="footer" id="contactUs">
            <img src={imgBG} alt="background" className="bgImg" />

            <div className="contactInfo">
                <div>
                    <h2 className="footerHeader">Get in touch</h2>
                    <hr />
                </div>
                <div className="contactDetails">
                    <p>
                        &#183; <span>Email:</span>{" "}
                        <a className="contactLink" href="mailto:milkv60@hotmail.com">
                            milkv60@hotmail.com
                        </a>{" "}
                        &#183;
                    </p>
                    <p>
                        &#183; <span>Contact No:</span>{" "}
                        <a className="contactLink" href="tel:+447818443629">
                            +447818443629
                        </a>{" "}
                        &#183;
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
                                T.M.
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
