import React from "react";
import "./Intro.css";

// import blob from "../assets/blob.svg";
import carpenter from "../assets/carpenter.jpeg";

const Intro = () => {
    return (
        <div className="intro">
            <div className="blob"></div>
            <div className="introBlock">
                <div>
                    <h2 className="introHeading">Vacys Milkintas</h2>
                    <p className="introText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis animi
                        at ipsam eum natus qui autem! Nemo exercitationem corporis ut?
                    </p>
                </div>
                <img src={carpenter} alt="carpenter" className="introImg" />
            </div>
        </div>
    );
};

export default Intro;