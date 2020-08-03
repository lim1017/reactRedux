import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchStream } from '../../actions'
import flv from "flv.js"

const ShowStream = (props) =>{

  console.log(props)


  const videoRef=React.createRef()
  const didMountRef = React.useRef(false)

  useEffect(() => {
    if(!didMountRef.current){
    props.fetchStream(props.match.params.id)
    renderPlayer()
    } else {
      didMountRef.current = true
      renderPlayer()
    }

    return () =>{
      console.log('unmounting')
      return videoRef.destory
    }

  }, [])

  const renderStreamInfo = ()=>{
    if (!props.stream){
      return <div>Loading...</div>
    }

    const {title, description} = props.stream


    return (
      <div>
        <video ref={videoRef} style={{width:"100%"}} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )

  }

  const renderPlayer = ()=>{
    if (videoRef || !props.stream){
      return;
    }

    const streamPlayer = flv.createPlayer({
      type:'flv',
      url: `http://localhost:8000/live/${props.match.params.id}.flv`
    })
    streamPlayer.attachMediaElement(videoRef.current)
    streamPlayer.load()
  }

  return(
    <>
    <div>showstream</div>
    {renderStreamInfo()}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchStream})(ShowStream)