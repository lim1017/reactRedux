import React from 'react'


class SearchBar extends React.Component {
  
  state = { searchText: "" }
  


  render(){
    return (
      <div className="ui segment" style={{display:"flex", justifyContent:'center', marginBottom:"2em"}}>
        <form className="ui form "
        onSubmit={(e)=>this.props.onFormSubmit(e, this.state.searchText)}
        >
          <div className='field'>

            <label>Image Search</label>
            <input type="text"
            onChange={e=> this.setState({searchText: e.target.value})}
            value={this.state.searchText}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar