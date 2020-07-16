import React from 'react'

class ImageInList extends React.Component {

  render() { 

    const {id, urls} =this.props.img

    return ( 
      
      <img
      key={id}
      src={urls.regular}
      alt="Girl in a jacket"
      // width="500"
      // height="600"
    ></img>

    );
  }
}
 
export default ImageInList;