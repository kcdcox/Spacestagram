import React from 'react';
import { useSelector } from 'react-redux'

import ImageCard from './Image-Card/ImageCard'
import ImageLoadingCard from './Image-Card/ImageLoadingCard.js';
import './ImageFeed.scss';

// renders image cards of either the feedImages or likedImages depending on it's prop 
const ImageFeed = props => {
    const feedImages = useSelector((state) => state.feedImages);
    const likedImages = useSelector((state) => state.likedImages);

    return (
        <div className="image-feed__container">
            <div className="image-feed__max-width-container">
                {props.likedFeed ? 
                    likedImages?.map((image, index) => (<ImageCard  key={index} image={image} />)) :
                    feedImages?.map((image, index) => (<ImageCard  key={index} image={image} />))}
                {props.likedFeed ? <div className="image-feed__spacer"/> : <ImageLoadingCard />}
            </div>
        </div>

    )
}
export default ImageFeed;