import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Icon from '@mdi/react'
import { mdiCardsHeart } from '@mdi/js'

import Datepicker from './Datepicker/Datepicker'
import './MainNav.scss';

const MainNav = props => {
    let location = useLocation();
    const likedImages = useSelector((state) => state.likedImages);
    const [oldLikedImagesCount, setOldLikedImagesCount] = useState();
    const [animateHeart, setAnimateHeart] = useState(false);

    useEffect(() => {
        if(likedImages.length > oldLikedImagesCount){ setAnimateHeart(true); }
        setOldLikedImagesCount(likedImages.length)
    }, [likedImages])

    return (
        <header className="main-header">
            <div className="main-header__texture-mask"/>
            <div className="main-header__max-width-container">
                <Link to="/">
                    <h3 className="main-header__spacestagram-title-text">    
                        SPACESTAGRAM
                    </h3>
                </Link>
                {location.pathname !== "/likedImages" && <Datepicker />}
                <div className="main-header__heart-icon-container">
                    <Link to="/likedImages">
                        <Icon className={`main-header__heart-icon ${animateHeart ? 'animate-heart-icon' : ''}`}
                            onAnimationEnd={() => setAnimateHeart(false)}
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