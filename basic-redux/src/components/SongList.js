import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"

const SongList = (props) => {


  const onClickHandler = (song)=>{
    props.selectSong(song)
  }


  const renderSongList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary"
            onClick={()=>onClickHandler(song)}
            >Select</button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>song listing</div>
      <div className='ui divided list'>{renderSongList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
