import React from "react";

import "./Section.css";

const Section = ({ image, title, description, backgroundDarker }) => {
    return (
        <div>
            <div className="trialDesign" style={{ backgroundColor: backgroundDarker && "#b0aeae" }}>
                <div className="textTest">
                    <div className="border">
                        <h2 className="sectionTextTitle">{title}</h2>
                        <p className="sectionTextDescr">{description}</p>
                    </div>
                </div>
                <div className="imageTest">
                    <img src={image} alt="carpentryPhoto" className="testImage" />
                </div>
            </div>
        </div>
    );
};

export default Section;
