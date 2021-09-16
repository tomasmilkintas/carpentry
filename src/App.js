import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Main/Header";
import Navbar from "./Navbar/Navbar";

import React, { createContext, useEffect, useState } from "react";
import Intro from "./Main/Intro";

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
                        <Header id="main" />
                    </div>

                    <Footer id="contactUs" />
                </div>
            </div>
        </GlobalContext.Provider>
    );
};

export default App;
