import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCard from './ImageCard';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

describe('The liked photos page', () => {
  it('does not render message if there are likedImages', () => {
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
  });
})