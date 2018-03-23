import React from 'react';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';

const LoginForm = ({
  store: {login}
}) => {
  const usernameRegex = /^[a-zA-Z0-9]*$/i;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return (
    <Formik
      initialValues={{
        usernameOrEmail: '',
        password: '',
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        const {usernameOrEmail} = values;
        let errors = {};
        if(!values.usernameOrEmail) {
          errors.usernameOrEmail = 'Required';
        } else if (!usernameRegex.test(usernameOrEmail) || emailRegex.test(usernameOrEmail)) {
          errors.usernameOrEmail = 'Invalid username or email';
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
        console.log('values in login', values)
        login(values);
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
            type="usernameOrEmail"
            name="usernameOrEmail"
            placeholder="Username or Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.usernameOrEmail}
          /><br />
          {touched.usernameOrEmail && errors.usernameOrEmail && <div>{errors.usernameOrEmail}</div>}
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
  )
};

export default inject('store')(observer(LoginForm))