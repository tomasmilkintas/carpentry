import React from "react";

import "./Section.css";

const Section = ({ image, title, description, backgroundDarker }) => {
    return (
        <div>
            <div
                className="sectionDesign"
                style={{ backgroundColor: backgroundDarker && "#b0aeae" }}
            >
                <div className="textTest">
                    <div className="border">
                        <h2 className="sectionTextTitle">{title}</h2>
                        <p className="sectionTextDescr">{description}</p>
                    </div>
                </div>
                <div className="imageContainer">
                    <img src={image} alt="carpentryPhoto" className="sectionImage" />
                </div>
            </div>
        </div>
    );
};

export default Section;
