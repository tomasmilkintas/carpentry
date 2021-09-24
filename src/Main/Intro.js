import React from "react";
import "./Intro.css";

import carpenter from "../assets/carpenter.png";
import Button from "./useful/Button/Button";

const Intro = () => {
    return (
        <div className="intro">
            <div className="blob"></div>
            <div className="introBlock">
                <div>
                    <h2 className="introHeading">Vacys Milkintas</h2>
                    <p className="introText">
                        Bespoke design to your exact specifications. Shape to your vision, shape to
                        your life.
                    </p>
                    <Button text="GET IN TOUCH" link="#contactUs" />
                </div>
                <img src={carpenter} alt="carpenter" className="introImg" />
            </div>
        </div>
    );
};

export default Intro;
