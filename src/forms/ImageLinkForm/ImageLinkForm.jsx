import React from 'react';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';

const ImageLinkForm = ({
  store: {handleImageSubmit, user}
}) => {
  return (
    <Formik
      initialValues={{
        imageUrl: '',
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        const {imageUrl} = values;
        let errors = {};
        if(!imageUrl) {
          errors.imageUrl = 'Required';
        } else if (!imageUrl) {
          errors.imageUrl = 'Required';
        }
        
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors, /* setValues and other goodies */ }
      ) => {
        setSubmitting(false);
        console.log('values in ImageLink', values)
        handleImageSubmit({
          imageUrl: values.imageUrl,
          user_id: user.user_id
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
        <form onSubmit={handleSubmit}>
          <input
            type="imageUrl"
            name="imageUrl"
            placeholder="Enter image url"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.imageUrl}
          /><br />
          {touched.imageUrl && errors.imageUrl && <div>{errors.imageUrl}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    />
  )
};

export default inject('store')(observer(ImageLinkForm))