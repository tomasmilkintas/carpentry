import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="headerSection">
            <div className="split">
                {/* <img
                    src="https://renify.s3.amazonaws.com/system/uploads/images/1712/Stainless_steel_worktops_-_Holte_Kitchens.jpg"
                    alt="work top"
                    className="image"
                /> */}
                <div className="imgDescr">
                    <div className="text">
                        <h2 className="textHeading">Bespoke furniture</h2>

                        {/* Loft Conversions
                        Timber Framed Buildings
                        Doors
                        Stairs & Balustrades
                        Kitchens (Supply & Fit)
                        Flooring (Laminate & Solid) and more
                        All General Carpentry & Joinery
                        Handyman Service
                        Extensions
                        Renewing, repairing, replacement*/}
                        {/* <p>
                            Kitchen units assembled to the highest quality. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Dolorem sequi quis eum blanditiis
                            alias, ad laudantium dignissimos aliquam? Laudantium rerum ab ex
                            tempore. Commodi ab veniam voluptatibus reiciendis incidunt, in dolore
                            odit officia ratione magnam cum quidem voluptate eos est?
                        </p> */}
                    </div>
                    <div className="blobHorizontal"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
