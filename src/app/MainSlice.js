import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';
import _ from 'lodash';

const initialState = {
    likedImages: [],
    feedImages: [],
    endDate: null,
    startDate: null,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addLikedImage: (state, {payload}) => {
        let likedCopy = _.cloneDeep(state.likedImages);
        if(likedCopy.length > 0){
            let index = likedCopy.findIndex((item) => moment(payload.date).isAfter(item.date));
            index = index === -1 ? likedCopy.length : index;
            likedCopy.splice(index, 0, payload);
        } else{
            likedCopy = [payload];
        }
        state.likedImages = likedCopy;
    },
    jumpToDate: (state, {payload}) => {
        state.feedImages = [];
        state.endDate = payload;
        state.startDate =  moment(payload).subtract(6, 'days').format("YYYY-MM-DD");
    },
    removeLikedImage: (state, {payload}) => {
        let likedCopy = _.cloneDeep(state.likedImages);
        let index = likedCopy.findIndex((item) => item.date == payload);
        if(index >= 0){ likedCopy.splice(index, 1) }
        state.likedImages = likedCopy;
    },
    updateFeedImages: (state, {payload}) => {
        state.feedImages = [...state.feedImages, ...payload];
    },
    setFetchDates: (state, {payload}) => {
        state.endDate = payload;
        state.startDate =  moment(payload).subtract(6, 'days').format("YYYY-MM-DD");
    }
  },
})

export const { 
    addLikedImage,
    removeLikedImage,
    jumpToDate,
    updateFeedImages,
    setFetchDates,
 } = mainSlice.actions

export default mainSlice.reducer;