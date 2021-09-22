# Try It Out!

Visit https://spacestagram42.herokuapp.com/ to give the app a try

# Overview

This alluring Instagram-like astronomy app delivers only the very best parts of Instagram — stunning, educational images! Spacestagram uses the NASA Astronomy Picture of the Day (APOD) API to fetch and display stunning astronomical images along with pithy educational explanations. The app features infinite scroll, image like/unlike capability, as well as a "Jump To Date" option, allowing the user to select a day and view any APOD from the past!

The application is built with React (via create-react-app) and Redux for tracking the main images feed and the liked images feed. When a user likes an image it is automatically saved in local storage through redux and redux-persist. React-router-dom is utilized when the user selects the heart in the top right corner of the navigation bar. This redirects the page to the '/likedImages' route — which displays a reversed chronological feed of their liked images. Fetch is used for fetching images from the APOD API and is called anytime the 'endDate' is updated — such as when the "Jump To Date" feature is used via the datepicker — as the APOD API expects a "start_date" and "end_date". The start_date is always set to be 7 days before the end_date so that a week of images is returned and displayed in reverse chronological order. Clicking the 'SPACESTAGRAM' text on the left side of the main nav bar will route the user back to the main page containing the NASA APOD feed.

## Code Structure

The main application files are within three parent folders within the 'src' folder:

- Pages -- there are two pages: the MainFeed and the LikedFeed 
  - MainFeed -- container component for the main feed components as well as the infinite scroll and fetch logic
  - LikedFeed -- container component for the liked feed components

- App -- this folders stores the redux store as well as the MainSlice ( the only slice in the app )
  - Store -- contain redux store boilerplate etc.  
  - MainSlice -- contains all the logic for altering data in local storage such as the likedImages, feedImages and startDate/endDate

- Components/Shared -- this folder holds the navigation bar and the image feed components which are shared accross pages
  - Header/MainNav -- this folder holds the mainNav component at the top of the page as well as the datepicker nested within the navigation bar
  - Image-Feed -- this folder holds the imageFeed component which creates a feed of Image-Card components
  - Image-Feed/Image-Card -- this folder holds the Image-Card component for displaying image data, and the Image-Loading-Card to add a loading state while waiting for a response from the APOD API

There are also test files throughout for testing logic, routing, redux and whether elements are displaying as expected!

## Run in Development
To run the app in development mode, run `npm start`

## Testing 
To run all of the tests, run `npm test`

## Building
To build the app, run `npm run build`

## Other
This app was built with [Create React App](https://github.com/facebook/create-react-app), which is sweet! It's then deployed on Heroku at https://spacestagram42.herokuapp.com/

This app used the Astronomy Picture of the Day (APOD) API to fetch all it's images and info (https://api.nasa.gov/).

The background images were found at https://www.pexels.com/


