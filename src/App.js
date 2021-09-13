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
                    <Header id="home" />
                </div>

                <Footer id="contactUs" />
            </div>
        </div>
    );
}

export default App;
