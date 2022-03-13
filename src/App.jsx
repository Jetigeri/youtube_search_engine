import React from "react";
import { ReactDOM } from "react-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/Youtube";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <VideoList videos={this.state.videos}></VideoList>
      </div>
    );
  }
}

export default App;
