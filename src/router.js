import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main'
import Profile from './pages/Profile'

function GRouter() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/profile/:username" component={Profile} />
    </Router>
  )
}

export default GRouter;
