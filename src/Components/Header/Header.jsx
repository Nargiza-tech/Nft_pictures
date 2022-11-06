import React from 'react';
import logo from "../../logo.svg"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="rfhnbyf"/>
                <span className="logo_title">NFT GALLERY</span>
            </Link>

        </div>
    );
};

export default Header;