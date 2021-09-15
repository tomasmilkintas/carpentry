import React from "react";
import "./Header.css";
import Portfolio from "./Portfolio";
// import HeadingBlobs from "./useful/HeadingBlobs";

import furniture from "./../assets/furniture.jpeg";
import furniture1 from "./../assets/furniture1.jpeg";

import flooring from "./../assets/flooring.jpeg";
import stairs3 from "./../assets/stairs3.jpeg";

import loft2 from "./../assets/loft2.jpeg";
import loft3 from "./../assets/loft3.jpeg";

import kitchen from "./../assets/kitchen.jpeg";
import kitchen1 from "./../assets/kitchen1.jpeg";

const Header = () => {
    return (
        <div className="headerSection" id="main">
            <div className="split">
                <div className="imgDescr">
                    <div className="text">
                        <h2 className="textHeading">Bespoke furniture</h2>
                    </div>
                    <div className="blobHorizontal"></div>
                </div>
            </div>

            <Portfolio image1={furniture} image2={furniture1} />

            <div className="split">
                <div className="imgDescr">
                    <div className="blobHorizontal"></div>
                    <div className="text">
                        <h2 className="textHeading">Loft conversions</h2>
                    </div>
                </div>
            </div>

            <Portfolio image1={loft2} image2={loft3} />

            <div className="split">
                <div className="imgDescr">
                    <div className="text">
                        <h2 className="textHeading">Flooring, staircases</h2>
                    </div>
                    <div className="blobHorizontal"></div>
                </div>
            </div>

            <Portfolio image1={flooring} image2={stairs3} />

            <div className="split">
                <div className="imgDescr">
                    <div className="blobHorizontal"></div>
                    <div className="text">
                        <h2 className="textHeading">Kitchens, extensions</h2>
                    </div>
                </div>
            </div>

            <Portfolio image1={kitchen} image2={kitchen1} />

            <div className="link">
                <a href="#top">Back to top</a>
            </div>

            {/* <HeadingBlobs text="Bespoke furniture" />
            <HeadingBlobs text="Loft conversions" />
            <HeadingBlobs text="Flooring, staircases" />
            <HeadingBlobs text="Kitchens, extensions" /> */}
        </div>
    );
};

export default Header;
