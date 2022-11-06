import React from 'react';
import {Link} from "react-router-dom";
import styles from '../Pages/NftPictures/NftPictures.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <img className="logo" src="https://www.pngall.com/wp-content/uploads/13/NFT-No-Background.png" alt="rfhnbyf"/>
                <span className="logo_title">NFT GALLERY</span>
            </Link>

        </div>
    );
};

export default Header;