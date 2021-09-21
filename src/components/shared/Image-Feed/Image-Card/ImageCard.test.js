import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCard from './ImageCard';
import { Provider } from 'react-redux';
import moment from 'moment';
import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

describe('The Image Card', () => {
  it('renders the image title and explanation', () => {
    let image = {
      date: "2021-06-24",
      explanation: "Grand design spiral galaxy Messier 99 looks majestic on a truly cosmic scale.",
      hdurl: "https://apod.nasa.gov/apod/image/2106/M99_LeoShatz_cropped.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Messier 99",
      copyright: "Max AlexanderSTFCSPL",
      url: "https://apod.nasa.gov/apod/image/2106/M99_LeoShatz_cropped1024.jpg"
    }
    let store = mockStore({
        feedImages: [ image ],
        likedImages: [],
    });
    render(<Provider store={store}><ImageCard image={image}/></Provider>);
    expect(screen.queryByText('Grand design spiral galaxy Messier 99 looks majestic on a truly cosmic scale.')).toBeInTheDocument();
    expect(screen.queryByText('Messier 99')).toBeInTheDocument();
    expect(screen.queryByText(moment("2021-06-24").format('MMMM D, YYYY').toUpperCase())).toBeInTheDocument();
  });
})