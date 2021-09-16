import React from "react";
import "./Portfolio.css";

const Portfolio = ({ image1, image2 }) => {
    return (
        <div className="portfolio">
            <div className="images">
                <div className="singleWork">
                    <img src={image1} alt="carpentryPhoto" className="projectImage" />
                    <img src={image2} alt="carpentryPhoto" className="projectImage" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
