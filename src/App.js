import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Main/Header";
import Navbar from "./Navbar/Navbar";

import React, { createContext, useEffect, useState } from "react";
import Intro from "./Main/Intro";

// import furniture from "./assets/furniture.jpeg";
// import furniture1 from "./assets/furniture1.jpeg";
import collage from "./assets/collage.png";
import collage2 from "./assets/collage2.png";
import Sections from "./Main/Sections/Sections";

export const GlobalContext = createContext();

const App = () => {
    const [mobileView, setMobileView] = useState(window.innerWidth < 426);
    const [ipadView, setIpadView] = useState(window.innerWidth < 726);

    const onResize = (e) => {
        let isProcess = false;
        if (isProcess) return;
        isProcess = true;
        requestAnimationFrame(() => {
            setMobileView(window.innerWidth < 426);
            setIpadView(window.innerWidth < 726);

            isProcess = false;
        });
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <GlobalContext.Provider value={{ mobileView, ipadView }}>
            <div className="App">
                <div>
                    <Navbar id="top" />

                    <div className="mainBody" id="top">
                        <Intro id="home" />
                        <div className="trialDesign">
                            <div className="textTest">
                                <div className="border">
                                    <h2>Bespoke furniture</h2>
                                    <p className="textDescr">Custom pieces for timeless spaces</p>
                                </div>
                            </div>
                            <div className="imageTest">
                                <img src={collage} alt="carpentryPhoto" className="testImage" />
                            </div>
                        </div>

                        {/* <Sections /> */}

                        {/* <Header id="main" /> */}
                    </div>

                    <Footer id="contactUs" />
                </div>
            </div>
        </GlobalContext.Provider>
    );
};

export default App;
