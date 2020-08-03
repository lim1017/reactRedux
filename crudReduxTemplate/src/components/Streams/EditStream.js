import React, { useEffect } from "react";
import _ from "lodash"
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

const EditStream = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchStream(props.match.params.id)
  }, [])


  const onSubmit = (formValues) => {
    const streamID = props.match.params.id;
    props.editStream(streamID, formValues);
  };

  return (
    <div>
      <h3>Edit a Stream</h3>
      {!props.stream ? (
        <div>Loading... </div>
      ) : (
        <StreamForm
          onFormSubmit={onSubmit}
          // initialValues={{title:props.stream.title, description:props.stream.description}}
          initialValues={_.pick(props.stream, "title", "description")}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  EditStream
);
