import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src="https://www.pngall.com/wp-content/uploads/13/NFT-No-Background.png" alt="rfhnbyf"/>
                <span className="logo_title">NFT GALLERY</span>
            </Link>

        </div>
    );
};

export default Header;