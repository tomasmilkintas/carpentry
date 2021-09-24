import React from "react";
import "./Button.css";

const Button = ({ text, link }) => {
    return (
        <div>
            <button className="button">
                <a className="buttonLink" href={link}>
                    <p className="buttonText">{text}</p>
                </a>
            </button>
        </div>
    );
};

export default Button;
