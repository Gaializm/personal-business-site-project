import React from 'react';
import logo from '../assets/outlined-placeholder-blank.svg';
import style from '../Styles/Header.module.css';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className={style["header"]}>
            <div className={style["header_image"]} >
                <img src={logo} alt={"ctrl+alt+create logo"} />
            </div>

            <NavBar />
 
        </header>
    );
};

export default Header;