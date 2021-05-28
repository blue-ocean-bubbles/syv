/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';

const initialValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //check values at email
    //check values at password for validation
  }

  const handleValidation = (e) => {
    //check values at email
    //check values at password for validation
  }

  return (
  <div>
    <Navbar>
      <div className="">
        <form className="" style={{ zIndex: '50' }} onSubmit={handleSubmit}>
          <label style={{ fontSize: '25px' }}>
            Email Address:
          {' '}
            <br />
            <input type="text" name="email" onChange={handleInputChange} className="" value={values.email}/>
          </label>
          <label style={{ fontSize: '25px' }}>
            Password:
          {' '}
            <br />
            <input type="text" name="password" onChange={handleInputChange} className="" value={values.password}/>
          </label>
          <input type="submit" value="Log-in" className="" />
        </form>
      </div>
    </Navbar>
    <Footer />

  </div>
)
};

export default SignIn;
