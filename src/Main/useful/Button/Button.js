import React from "react";

const Button = ({ text, cssClass }) => {
    return (
        <div>
            <button className={cssClass}>{text}</button>
        </div>
    );
};

export default Button;
