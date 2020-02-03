
import React, { Component } from "react";
import "./App.css";

import dummyData from './dummy-data';
import PostsPage from './components/PostsContainer/PostsPage'
import SearchBar from './components/SearchBar/SearchBarContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsPage posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
