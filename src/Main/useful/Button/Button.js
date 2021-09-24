import React from "react";
import "./Button.css";

const Button = ({ text, link }) => {
    return (
        <div>
            <a className="buttonLink" href={link}>
                <button className="button">
                    <p className="buttonText">{text}</p>
                </button>
            </a>
        </div>
    );
};

export default Button;
