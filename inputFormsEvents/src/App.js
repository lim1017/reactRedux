import React from 'react'
import SearchBar from './components/SearchBar'

class App extends React.Component {
  
  state = { searchText: "" }
  
  onFormSubmit = (e, value) =>{
    e.preventDefault()
    alert(`submitted ${value}`)
  }

  render(){
    return (
      <div style={{display:"flex", justifyContent:"center", marginTop:"2em"}}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    )
  }
}

export default App