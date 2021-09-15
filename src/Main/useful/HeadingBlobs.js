import React from "react";
import "./HeadingBlobs.css";

const headingBlobs = ({ text }) => {
    return (
        <div className="split">
            <div className="imgDescr">
                <div className="blobHorizontal"></div>
                <div className="text">
                    <h2 className="textHeading">{text}</h2>
                </div>
            </div>
        </div>
    );
};

export default headingBlobs;
