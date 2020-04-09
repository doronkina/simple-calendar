import React from 'react';

import logo from '../../imgs/logo.svg';
import bell from '../../imgs/bell.svg';
import arrowDown from '../../imgs/arrowDown.svg';
import searching from '../../imgs/searching.svg';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
                Beta
            </div>
            <div className="headerBtns">
                <button className="circle lightHeaderBtn">
                    <img src={bell} alt="bell" />
                </button>
                <button className="userSettings lightHeaderBtn">
                    Артем
                    <img src={arrowDown} alt="arrowDown" />
                </button>
                <button className="circle darkHeaderBtn">
                    <img src={searching} alt="searching" />
                </button>
                <button className="languageSettings darkHeaderBtn">
                    Ru
                    <img src={arrowDown} alt="arrowDown" />
                </button>
            </div>
        </header>
    )
}

export default Header;