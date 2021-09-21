import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNav from './components/shared/Header/MainNav';
import MainFeed from './pages/MainFeed/MainFeed';
import LikedFeed from './pages/LikedFeed/LikedFeed';

function App() {

  let routes = (
    <Switch>
      <Route path="/" exact>            <MainFeed />  </Route>
      <Route path="/likedImages" exact> <LikedFeed /> </Route>
      <Redirect to="/" />
    </Switch>
  )

  return (
    <Router>
      <MainNav />
      <main>{routes}</main>
    </Router>
  );
}

export default App;
