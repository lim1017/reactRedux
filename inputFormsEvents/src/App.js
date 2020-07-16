import React from "react";
import SearchBar from "./components/SearchBar";
import ImageInList from "./components/ImageList"

import unsplash from "./api/unsplash"
import { CircularProgress }from '@material-ui/core'
import './App.css'

class App extends React.Component {
  state = { searchText: "", searchResults: [], loading: false };

onFormSubmit = async (e, value) => {
    e.preventDefault();
    //using async await


  this.setState({loading:true})
  const response = await unsplash
      .get("/search/photos", {
        params: {
          query: value,
        }
      })
      
        console.log(response);
        this.setState({ searchResults: response.data.results });
        this.setState({loading:false})

};

  render() {
    return (
 
      <div
        style={{ display: "flex", justifyContent: "center", flexDirection:'column', marginTop: "2em" }}
      >
        <SearchBar onFormSubmit={this.onFormSubmit} />

        
        {this.state.loading? <CircularProgress /> :
        <div className="img-container">
          {this.state.searchResults.map((img) => {
            return (
             <ImageInList img={img} />
            );
          })}
        </div>
      }


      </div>
    );
  }
}

export default App;
