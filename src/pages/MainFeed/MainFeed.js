import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';

import { clearStorage, updateFeedImages, setFetchDates  } from '../../app/MainSlice';
import ImageFeed from '../../components/shared/Image-Feed/ImageFeed';
import './MainFeed.scss';

// Page for rendering the Main NASA Image feed
const MainFeed = props => {
    const dispatch = useDispatch(); 
    const [prevFeedLength, setPrevFeedLength] = useState(null);
    const feedImages = useSelector((state) => state.feedImages);
    const endDate = useSelector((state) => state.endDate);
    const startDate = useSelector((state) => state.startDate);
    const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const NASA_URL = "https://api.nasa.gov/planetary/apod?api_key="

    // Update EndDate (Top of feed Date) to then fetch nasa images accordingly
    // NASA Image fetch is triggered upon endDate changing
    useEffect(() => {   
        (endDate === null || startDate === null) ? dispatch(setFetchDates(moment().format("YYYY-MM-DD"))) : syncFeedEndDate();
    }, [endDate])

    // Fetches A Week worth of Nasa images based on the andDate (Top of feed Date)
    const fetchNASAImages = () => {
        fetch(NASA_URL + NASA_API_KEY + '&start_date=' + startDate + '&end_date=' + endDate).then(res => {
            return res.json();
        }).then((data) => {
            if(Array.isArray(data)){ dispatch(updateFeedImages(data?.reverse())); }
        });
    }

    // Updates end-date if out of sync with feed, otherwise gets more nasa images
    const syncFeedEndDate = () => {
        if(feedImages.length > 0 && moment(endDate).isAfter(feedImages[feedImages.length - 1]?.date)){
           dispatch(setFetchDates(moment(feedImages[feedImages.length - 1]?.date).subtract(1, 'day').format("YYYY-MM-DD")))
        } else {
            fetchNASAImages() 
        }
    }

    // Watches for when user scrolls within x pixels from bottom and updates endDate to trigger another image fetch
    const scrollThresholdWatcher = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1000;
        if(bottom && prevFeedLength != feedImages.length){
            setPrevFeedLength(feedImages.length);
            dispatch(setFetchDates(moment(startDate).subtract(1, 'day').format("YYYY-MM-DD")));
        }
    }

    return (
        <div className="main-feed__container" onScroll={(e) => scrollThresholdWatcher(e)}>
            <ImageFeed likedFeed={false} />
            <div className="main-feed__background-image"/>
        </div>
    )
}

export default MainFeed;