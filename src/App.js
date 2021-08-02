import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <div>
                <Navbar id="top" />

                <div className="mainBody">
                    {/* <div className="headerSection" id="home"> */}
                    <Header id="home" />
                    {/* </div> */}
                    <div className="mainSection" id="main"></div>
                    <div className="lastSection"></div>
                </div>

                <Footer id="contactUs" />
            </div>
        </div>
    );
}

export default App;
