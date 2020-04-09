import React, {useState} from 'react';

import NavBtns from './NavBtns/NavBtns';

import arrowDown from '../../imgs/arrowDown.svg';
import navIcon from '../../imgs/navIcon.svg';

import './NavPanel.scss';

const NavPanel = () => {
    let [navBtns, showNavBtns] = useState(true);

    return (
        <nav>
            <div className="navMenu">
                <button className="navBtn" onClick={ () => showNavBtns(!navBtns) }>
                    Эксперт
                </button>
                {navBtns ?
                    <button className="arrowBtn" onClick={ () => showNavBtns(!navBtns) }>
                        <img src={arrowDown} alt="arrowDown" />
                    </button> :
                    <div></div>
                }
                <button className="imgBtn">
                    <img src={navIcon} alt="navIcon" />
                </button>
            </div>
            {navBtns ? <NavBtns /> : null}
        </nav>
    );
}

export default NavPanel;
