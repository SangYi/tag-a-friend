import React from 'react';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';

const RegisterForm = ({
  store: {register},
  changeRoute
}) => (
  <Formik
    initialValues={{
      name: '',
      username: '',
      email: '',
      password: '',
    }}
    validate={values => {
      // same as above, but feel free to move this into a class method now.
      let errors = {};
      if(!values.name){
        errors.name = 'Required';
      }
      if(!values.username) {
        errors.username = 'Required';
      } else if (!/^[a-zA-Z0-9]*$/) {
        errors.username = 'Invalid username';
      }
      if(!values.email) {
        errors.email = 'Required';
      } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
        errors.email = 'Invalid email address';
      }
      if(!values.password) {
        errors.password = 'Required';
      }
      return errors;
    }}
    onSubmit={(
      values,
      { setSubmitting, setErrors, /* setValues and other goodies */ }
    ) => {
      setSubmitting(false);
      console.log('values in register', values)
      register(values, changeRoute);
    }}
    render={({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          placeholder="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        /><br />
        {touched.name && errors.name && <div>{errors.name}</div>}
        <input
          type="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        /><br />
        {touched.username && errors.username && <div>{errors.username}</div>}
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        /><br />
        {touched.email && errors.email && <div>{errors.email}</div>}
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        /><br />
        {touched.password && errors.password && <div>{errors.password}</div>}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    )}
  />
);

// export default RegisterForm;
export default inject('store')(observer(RegisterForm))