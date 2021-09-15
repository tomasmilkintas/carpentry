import React from "react";
import "./Portfolio.css";

// import stairs4 from "./../assets/stairs4.jpeg";
// import stairs2 from "./../assets/stairs2.jpeg";

// import flooring from "./../assets/flooring.jpeg";
// import stairs3 from "./../assets/stairs3.jpeg";

// import furniture from "./../assets/furniture.jpeg";
// import furniture1 from "./../assets/furniture1.jpeg";

// import kitchen from "./../assets/kitchen.jpeg";
// import kitchen1 from "./../assets/kitchen1.jpeg";

// import loft2 from "./../assets/loft2.jpeg";
// import loft3 from "./../assets/loft3.jpeg";

const Portfolio = ({ image1, image2 }) => {
    return (
        <div className="portfolio">
            <div className="images">
                <div className="singleWork">
                    <img src={image1} alt="furniture" className="projectImage" />
                    <img src={image2} alt="furniture" className="projectImage" />
                </div>

                {/* <div className="singleWork">
                    <img src={furniture} alt="furniture" className="projectImage" />
                    <img src={furniture1} alt="furniture" className="projectImage" />
                </div> */}

                {/* <div className="singleWork">
                    <img src={loft2} alt="loft" className="projectImage" />
                    <img src={loft3} alt="loft" className="projectImage" />
                </div> */}
                {/* <div className="singleWork">
                    <img src={stairs4} alt="stairs" className="projectImage" />
                    <img src={stairs2} alt="stairs" className="projectImage" />
                </div> */}

                {/* <div className="singleWork">
                    <img src={flooring} alt="wooden flooring" className="projectImage" />
                    <img src={stairs3} alt="stairs" className="projectImage" />
                </div>

                <div className="singleWork">
                    <img src={kitchen} alt="kitchen" className="projectImage" />
                    <img src={kitchen1} alt="kitchen" className="projectImage" />
                </div> */}
            </div>
        </div>
    );
};

export default Portfolio;
