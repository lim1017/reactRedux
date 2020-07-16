import React from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'

class App extends React.Component {
  
  state = { searchText: "", searchResults:[] }
  
  onFormSubmit = (e, value) =>{
    e.preventDefault()

    axios.get("https://api.unsplash.com/search/photos", {
      headers:{
        Authorization: 'Client-ID JELNO8PZyJFYAFgGYtVbTgqmS_hAoSMnB4puJQaPXMs'
      },
      params:{
        query: value
      }
    }).then(response =>{
      console.log(response)
      this.setState({searchResults: response.data.results})
    })

  }

  render(){
    return (
      <div style={{display:"flex", justifyContent:"center", marginTop:"2em"}}>
        <SearchBar onFormSubmit={this.onFormSubmit} />

        {this.state.searchResults.map((img) =>{
          return (
          <img src={`${img.urls.regular}`} alt="Girl in a jacket" width="500" height="600"></img>
          )
        })}
      </div>
    )
  }
}

export default App