import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

const StreamList = (props) => {
  const renderAdminButtons = (stream) => {
    if (stream.userId === props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`}>
            <button className="ui button primary">EDIT</button>
          </Link>
          <Link to={`/streams/delete/${stream.id}`}>
            <button className="ui button negative">DELETE</button>
          </Link>
        </div>
      );
    }
  };

  const renderStreamList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          \{renderAdminButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link className="header" to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    props.fetchStreams();
  }, []);

  return (
    <div>
      <h2>Stream list</h2>
      <div className="ui celled list">{renderStreamList()}</div>
      {props.isSignedIn ? (
        <Link to="/streams/create">
          <button className="ui button primary">Create Stream</button>
        </Link>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
