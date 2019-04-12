import React, { Component } from 'react';
import MovieListing from './MovieListing';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import AddMovie from "./AddMovie";

class App extends Component {
  render() {
    return (
      <Router>
          <h1>Welcome to CodeSchool Movie Listing</h1>
          <div>
              <Link to="/">Home</Link> |
              <Link to="/listing">List</Link> |
              <Link to="/add">Add Movie</Link>
              <Route path="/listing" component={MovieListing}/>
              <Route path="/add" component={AddMovie}/>
              <Route path="/"/>
          </div>

      </Router>
    );
  }
}

export default App;
