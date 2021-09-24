import React from "react";
import Section from "./Section/Section";

import "./Sections.css";

import collage7 from "./../../assets/collage7.png";
import collage8 from "./../../assets/collage8.png";
import collage6 from "./../../assets/collage6.png";
import collage4 from "./../../assets/collage4.png";

const Sections = () => {
    return (
        <div>
            <Section
                image={collage7}
                title="Bespoke furniture"
                description="Custom pieces for timeless spaces"
            />
            <Section
                image={collage8}
                title="Flooring, staircases"
                description="Custom pieces for timeless spaces"
                backgroundDarker
            />
            <Section
                image={collage6}
                title="Loft conversions"
                description="Custom pieces for timeless spaces"
            />
            <Section
                image={collage4}
                title="Kitchens, extensions"
                description="Custom pieces for timeless spaces"
                backgroundDarker
            />
        </div>
    );
};

export default Sections;
