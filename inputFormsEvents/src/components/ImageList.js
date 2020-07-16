import React from 'react'

class ImageInList extends React.Component {

  constructor(props){
    super(props)

    this.imageRef=React.createRef();
  }


  render() { 
    console.log(this.imageRef)

    const {id, urls} =this.props.img
    return ( 
      
      <img
      ref={this.imageRef}
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