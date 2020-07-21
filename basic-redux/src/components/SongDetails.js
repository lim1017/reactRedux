import React from 'react'
import {connect} from 'react-redux'

const SongDetail = (props) =>{
  const { song, selectedSong } =props

  if (!selectedSong){
    return <div>Select a Song</div>
  }
  return (  
    <div>
      <h3>Details for:</h3>
      <p>
      {selectedSong.title}
      <br />
      {selectedSong.duration}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong,
  };
}

export default connect(mapStateToProps)(SongDetail)