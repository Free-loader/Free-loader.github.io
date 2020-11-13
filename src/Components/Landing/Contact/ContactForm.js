import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { db } from '../../../API/firebase';
import firebase from 'firebase';
import cx from 'classnames';

import styles from './ContactForm.module.css';

const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const initial = {
  name: '',
  email: '',
  mobile: '',
  description: ''
};

const validataion = (values) => {
  let errors = {};
  if (values.name === '') {
    errors.name = 'You must have a first name';
  }
  if (values.email === '') {
    errors.email = 'Email is required';
  } else if (!emailTest.test(values.email)) {
    errors.email = 'Invalid email address format';
  }
  if (values.description === '') {
    errors.description = 'You must describe the project you want';
  }
  return errors;
};

const submission = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
  try {
    await db.collection('contact').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // To get latest posts displayed as per the time the post get uploaded on server
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      description: values.description
    });
    alert(`Your response has been recorded. Thank You. 😃`);
    resetForm({});
    setStatus({ success: true });
  } catch (error) {
    setStatus({ success: false });
    setSubmitting(false);
    setErrors({ submit: error.message });
  }
};

function ContactForm() {
  return (
    <div className={styles['form-container']}>
      <div className={styles['form-header']}>Enquire Now</div>
      <div className={styles['main-row']}>
        <Formik initialValues={initial} validate={validataion} onSubmit={submission}>
          {({ touched, errors, handleSubmit, isSubmitting, isValid, status }) => (
            <Form
              loading={isSubmitting}
              success={!!status && !!status.success}
              error={!!errors.submit}
              onSubmit={handleSubmit}
            >
              <div className={styles['form-group']}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className={cx(styles['form-control'], touched.name && errors.name ? styles['is-invalid'] : '')}
                />
                <label htmlFor="firstName">Name</label>
                <ErrorMessage component="div" name="firstName" className={styles['invalid-feedback']} />
              </div>

              <div className={styles['form-group']}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={cx(styles['form-control'], touched.email && errors.email ? styles['is-invalid'] : '')}
                />
                <label htmlFor="email">Email</label>
                <ErrorMessage component="div" name="email" className={styles['invalid-feedback']} />
              </div>

              <div className={styles['form-group']}>
                <Field
                  type="number"
                  name="mobile"
                  placeholder="Enter Mobile No. (Optional)"
                  className={cx(styles['form-control'], touched.mobile && errors.mobile ? styles['is-invalid'] : '')}
                />
                <label htmlFor="mobile">Mobile No.</label>
                <ErrorMessage component="div" name="mobile" className={styles['invalid-feedback']} />
              </div>

              <div className={styles['form-group']}>
                <Field
                  type="text"
                  name="description"
                  placeholder="Describe in few words"
                  className={cx(
                    styles['form-control'],
                    touched.description && errors.description ? styles['is-invalid'] : ''
                  )}
                />
                <label htmlFor="description">Description</label>
                <ErrorMessage component="div" name="description" className={styles['invalid-feedback']} />
              </div>

              <button type="submit" className={styles['btn-submit']} disabled={isSubmitting || !isValid}>
                {isSubmitting ? 'Please wait...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;
