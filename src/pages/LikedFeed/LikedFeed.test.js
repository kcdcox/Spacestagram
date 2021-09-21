import React from 'react';
import { render, screen } from '@testing-library/react';
import LikedFeed from './LikedFeed';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

describe('The liked photos page', () => {
  it('does not render message if there are likedImages', () => {
    let store = mockStore({
        likedImages: [ "image" ],
    });
    render(<Provider store={store}><LikedFeed /></Provider>);
    expect(screen.queryByText('Like Images To View Them Here :)')).not.toBeInTheDocument();
  });

  it('renders message if the likedImages is empty', () => {
    let store = mockStore({
        likedImages: [],
    });
    render(<Provider store={store}><LikedFeed /></Provider>);
    expect(screen.queryByText('Like Images To View Them Here :)')).toBeInTheDocument();
  });
})