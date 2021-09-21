import React, {useEffect} from 'react';
import Icon from '@mdi/react'
import { mdiLoading, mdiImageArea} from '@mdi/js';

import './ImageLoadingCard.scss';

// Empty card with loading animation to notify the user the page is fetching more images
const ImageLoadingCard = props => {

    return (
        <div className="image-loading-card__container">
            <div className="image-loading-card__dummy-image">
                <Icon className="image-loading-card__loading-icon" 
                    path={mdiLoading}
                    color="lightgrey"
                    title="Loading Icon" 
                    size={9} 
                    spin/>
                <Icon className="image-loading-card__image-icon" 
                    path={mdiImageArea} 
                    color="lightgrey"
                    title="Loading Icon" 
                    size={4} 
                    />
            </div>
            <div className="image-loading-card__dummy-text">
                <div className="image-loading-card__dummy-p1"></div>
                <div className="image-loading-card__dummy-p2"></div>
                <div className="image-loading-card__dummy-p3"></div>
            </div>
        </div>
    )
}

export default ImageLoadingCard;