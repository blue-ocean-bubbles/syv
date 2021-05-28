/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Navbar from '../components/navbar';

const SignIn = () => (
  <div>
    <Navbar>
      <div className="">
        <form className="" style={{ zIndex: '50' }}>
          <label style={{ fontSize: '25px' }}>
            Email Address:
            {' '}
            <br />
            <input type="text" name="name" className="" />
          </label>
          <label style={{ fontSize: '25px' }}>
            Password:
            {' '}
            <br />
            <input type="text" name="name" className="" />
          </label>
          <input type="submit" value="Log-in" className="" />
        </form>
      </div>
    </Navbar>
  </div>
);

export default SignIn;
