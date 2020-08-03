import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/";
import StreamForm from "./StreamForm";

const CreateStream = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onFormSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(CreateStream);
