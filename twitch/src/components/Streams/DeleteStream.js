import React, {useEffect} from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { deleteStream, fetchStream } from "../../actions/"
import history from '../../history'


const DeleteStream = (props) => {

  useEffect(() => {
    props.fetchStream(props.match.params.id)
  }, [])


  const renderContent = () =>{
    if (!props.stream){
      return "Delete ?"
    }

    return `Delete ${props.stream.title} ?`
  }

  const actions = ()=> {
    return(
    <div>
      <button onClick={()=> props.deleteStream(props.match.params.id)} className="ui button negative"> Delete </button>
      <Link to={`/`}>
      <button className="ui button"> Cancel </button>
      </Link>
    </div>
    )
  };

  return (
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions()}
        onDismiss={()=> history.push('/')}
      />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps,{ deleteStream, fetchStream })(DeleteStream);
