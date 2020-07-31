import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateStream = (props) => {


  const renderInput = (props) => {
    const { input, label, meta } = props

    const className=`field ${meta.error && meta.touched} ? ' error' : ""`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.touched ? <div className='ui error message'>{meta.error}</div> : null}
        
      </div>
    );
  };

  const onSubmit = (formValues) => {

  };

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Title" />
      <Field
        name="description"
        component={renderInput}
        label="Description"
      />
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

export default reduxForm({ form: "streamCreate", validate })(CreateStream);
