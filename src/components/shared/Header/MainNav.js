import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiCardsHeart } from '@mdi/js'

import Datepicker from './Datepicker/Datepicker'
import './MainNav.scss';

const MainNav = props => {

    return (
        <header className="main-header">
            <div className="main-header__texture-mask"/>
            <div className="main-header__max-width-container">
                <Link to="/">
                    <h3 className="main-header__spacestagram-title-text">    
                        SPACESTAGRAM
                    </h3>
                </Link>
                <Datepicker />
                <div className="main-header__heart-icon-container">
                    <Link to="/likedImages">
                        <Icon className="main-header__heart-icon" 
                            path={mdiCardsHeart} 
                            title="Favourite Heart" 
                            size={1.8} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default MainNav;