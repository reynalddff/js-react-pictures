import React, { Component } from "react";

import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // axios API dari file unsplash
    const responsePics = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: responsePics.data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "3em" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
