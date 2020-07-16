import React from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import './App.css'

class App extends React.Component {
  state = { searchText: "", searchResults: [] };

 async onFormSubmit = (e, value) => {
    e.preventDefault();
    //using async await

  const response =await axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          Authorization:
            "Client-ID JELNO8PZyJFYAFgGYtVbTgqmS_hAoSMnB4puJQaPXMs",
        },
        params: {
          query: value,
        },
      })
      
        console.log(response);
        this.setState({ searchResults: response.data.results });
};

  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", flexDirection:'column', marginTop: "2em" }}
      >
        <SearchBar onFormSubmit={this.onFormSubmit} />

        <div className="img-container">
          {this.state.searchResults.map((img) => {
            return (
              <img
                src={`${img.urls.regular}`}
                alt="Girl in a jacket"
                width="500"
                height="600"
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
