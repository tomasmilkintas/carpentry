import React from "react";
import Section from "./Section/Section";

import "./Sections.css";

import collage7 from "./../../assets/collage7.png";
import collage8 from "./../../assets/collage8.png";
import collage6 from "./../../assets/collage6.png";
import collage4 from "./../../assets/collage4.png";

const Sections = () => {
    return (
        <div id="main">
            <Section
                image={collage7}
                title="Bespoke furniture"
                description="Custom pieces for timeless spaces"
            />
            <Section
                image={collage8}
                title="Flooring, staircases"
                description="Stunning statement in any home"
                backgroundDarker
            />
            <Section
                image={collage6}
                title="Loft conversions"
                description="Going above and beyond for you"
            />
            <Section
                image={collage4}
                title="Kitchens, extensions"
                description="Modern masterpieces that will stand the test of time"
                backgroundDarker
            />
            {/* <div className="link">
                <a href="#top">Back to top</a>
            </div> */}
        </div>
    );
};

export default Sections;
