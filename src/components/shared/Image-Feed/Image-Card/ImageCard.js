import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { mdiCardsHeart, mdiHeartOutline } from '@mdi/js';
import moment from 'moment';
import Icon from '@mdi/react'

import { addLikedImage, removeLikedImage } from '../../../../app/MainSlice'
import './ImageCard.scss';

// Container component for display each nasa image and info
const ImageCard = props => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(undefined);
    const likedImages = useSelector((state) => state.likedImages);
    
    // Sets isLiked state based on whether it exists in the likedImage feed in local storage
    // This state is used for the heart colour and icon type 
    useEffect(()=> { setIsLiked(isImageLiked()); }, [likedImages]);

    // determines whether image is in likedImages in localSTorage
    const isImageLiked = () => likedImages.find((image) => image.date === props.image.date) ? true : false;

    // Updates the liked status of an image when the heart is pressed
    const updateImageLikeStatus = () => {
        isImageLiked() ? dispatch(removeLikedImage(props.image.date)) : dispatch(addLikedImage(props.image));
    }

    return (
        <div className="image-card__container">
            <div className="image-card__top-info">
                <h3 className="image-card__copyright">{props.image.copyright}</h3>
                <h3 className="image-card__date">{moment(props.image.date).format('MMMM D, YYYY').toUpperCase()}</h3>
            </div>
            <div className="image-card__image-container">
                {props.image.media_type === "image" ? 
                    <img className="image-card__image" alt="Space Image" src={props.image.hdurl? props.image.hdurl : props.image.url}/> : 
                    <iframe width="400" height="250" src={props.image.url} frameBorder="0" allowFullScreen></iframe>
                }
            </div>
            <div className="image-card__bottom-info">
                <div className="image-card__title-like">
                    <h3 className="image-card__title">{props.image.title}</h3>
                    <div className="image-card__heart-icon-container" >
                        <Icon className="image-card__heart-icon" 
                            onClick={() => updateImageLikeStatus()}
                            path={isLiked ? mdiCardsHeart : mdiHeartOutline} 
                            color={isLiked ? "#fc3d21" : "#2A5AAB"}
                            title="Like Heart" 
                            size={1.5} />
                    </div>
                </div>
                <p className="image-card__description">{props.image.explanation}</p>
            </div>
        </div>
    )
}

export default ImageCard;