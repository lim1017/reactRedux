import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions/";

const renderError = (meta) => {
  const { error, touched } = meta;

  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const renderInput = (props) => {
  const { input, label, meta } = props;

  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const CreateStream = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Title" />
      <Field name="description" component={renderInput} label="Description" />
      <button className="ui button">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Enter a title";
  }

  if (!formValues.description) {
    errors.description = "Enter a description";
  }

  return errors;
};

const formWrapped = reduxForm({ form: "streamCreate", validate })(CreateStream);

export default connect(null, { createStream })(formWrapped);
