import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="headerSection">
            <div className="split">
                <img
                    src="https://renify.s3.amazonaws.com/system/uploads/images/1712/Stainless_steel_worktops_-_Holte_Kitchens.jpg"
                    alt="work top"
                    className="image"
                />
                <div className="imgDescr">
                    <div className="text">
                        <h2>Bespoke furniture</h2>
                        <p>Kitchen units assembled to the highest quality</p>
                    </div>
                </div>
            </div>

            {/* <div className="rightSide">
                <div className="rightImage">
                    <img
                        src="https://www.hammonds-uk.com/sites/default/files/2017-12/bedroom-storage-3.jpg"
                        alt="wardrobe"
                        className="headerRightImg"
                    />
                </div>
                <div className="rightImgDescr">
                    <div className="rightTitle">
                        <h2>Bespoke furniture</h2>
                    </div>
                    <div className="rightText">
                        <p>Wardrobes according to your measurements</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Header;
