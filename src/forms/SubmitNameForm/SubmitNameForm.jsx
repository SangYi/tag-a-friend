import React from 'react';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';

const SubmitNameForm = ({
  store: { handleNameSubmit, currentPhoto },
  face_id,
  className
}) => {
  return (
    <Formik
      initialValues={{
        name: currentPhoto.name || '',
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        const {name} = values;
        let errors = {};
        if(!name) {
          errors.name = 'Required';
        } else if (!name) {
          errors.name = 'Required';
        }
        
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors, /* setValues and other goodies */ }
      ) => {
        setSubmitting(false);
        console.log('values in SubmitNameForm', values)
        handleNameSubmit({
          name: values.name,
          face_id,
        });
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
        <form className={className} onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            placeholder="Enter a name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          /><br />
          {touched.name && errors.name && <div>{errors.name}</div>}
        </form>
      )}
    />
  )
}

export default inject('store')(observer(SubmitNameForm));