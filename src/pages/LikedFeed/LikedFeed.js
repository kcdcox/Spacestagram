import React from 'react';
import { useSelector } from 'react-redux'

import ImageFeed from '../../components/shared/Image-Feed/ImageFeed';
import '../MainFeed/MainFeed';
import './LikedFeed.scss'

// Page for rendering liked images
const LikedFeed = props => {
    const likedImages = useSelector((state) => state.likedImages);

    const renderNoLikedImagesMessage = (
        <div className="liked-feed__none-liked-message">
            Like Images To View Them Here :) 
        </div>
    )

    return (
        <div className="main-feed__container">
            <ImageFeed likedFeed={true} />
            <div className="liked-feed__background-image"/>
            {likedImages.length == 0 && renderNoLikedImagesMessage}
        </div>
    )
}

export default LikedFeed;