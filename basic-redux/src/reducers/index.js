import { combineReducers } from 'redux';

//song list reducer
const songsReducer = () =>{
  return [
    {
      title: "Song 1",
      duration: "1:33"
    },
    {
      title: "Song 2",
      duration: "3:33"
    },
    {
      title: "Song 3",
      duration: "2:22"
    },
    {
      title: "Song 4",
      duration: "4:44"
    },
  ]
}


//select song reducer
const selectSongReducer = (selectedSong=null, action) =>{
  if (action.type === "SONG_SELECTED"){
    return action.payload
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
});