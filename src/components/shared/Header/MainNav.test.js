import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route,  } from "react-router-dom";

import { store } from '../../../app/store';
import MainNav from './MainNav';

test("Checks that SPACESTAGRAM title is in nav on LikedImages and datpicker IS NOT on page", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter initialEntries={["/likedImages"]}>
        <Provider store={store}><MainNav /></Provider>
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe("/likedImages");
    expect(screen.queryByText('SPACESTAGRAM')).toBeInTheDocument();
    expect(screen.queryByTestId('datepicker')).not.toBeInTheDocument();
});

test("Checks that SPACESTAGRAM title is in nav and datepicker IS on page", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}><MainNav /></Provider>
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe("/");
    expect(screen.queryByText('SPACESTAGRAM')).toBeInTheDocument();
    expect(screen.queryByTestId('datepicker')).toBeInTheDocument();
});