import React from 'react';
import { render, screen } from '@testing-library/react';
import MainFeed from './MainFeed';
import { Provider } from 'react-redux';
import moment from 'moment';
import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

describe('The main nasa images feed page', () => {
  it('renders the loading image card and feedimage cards if the data exists', () => {
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
          feedImages: [ image, image, image ],
          likedImages: [],
      });
    render(<Provider store={store}><MainFeed /></Provider>);
    expect(screen.queryByTestId('image-loading-card')).toBeInTheDocument();
    expect(screen.getAllByText('Grand design spiral galaxy Messier 99 looks majestic on a truly cosmic scale.')).toHaveLength(3)
    expect(screen.getAllByText('Messier 99')).toHaveLength(3)
    expect(screen.getAllByText(moment("2021-06-24").format('MMMM D, YYYY').toUpperCase())).toHaveLength(3)
  });

})