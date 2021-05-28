/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';

const AddressForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    e.persist();
    setValues({ ...values, [name]: value });
  };
  const submit = async () => {
    const inputs = ['street', 'city', 'state', 'zip'];
    const errObj = {};
    // check to see if the input has any values
    for (const input of inputs) {
      if (!values[input]) {
        errObj[input] = 'Please fill out';
      }
    }
    // set the error object to state
    setErrors(errObj);
    // check if form contains any errors
    const errorKeys = Object.keys(errObj);
    if (errorKeys.length > 0) {
      errObj.main = '*Please make sure all fields are filled out completely.';
      return setErrors(errObj);
    }
    // if no errors, then submit form to update user's address
    const address = { ...values };
    const res = await axios({
      url: '/api/user',
      method: 'PUT',
      data: address,
    });
    // if updated successfully
    if (res.status === 204) {
      router.push('/dashboard');
    }
  };
  return (
    <Navbar>
      <div className="mt-8 flex flex-col justify-center items-center">
        <h2 className="text-7xl uppercase font-bold text-gray-800">Additional Info</h2>
        <div>
          <p className="text-lg font-light text-gray-700 italic">Please register your address with us for the full experience of SYV</p>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full">
              <label htmlFor="street">
                {errors && errors.street ? <p className="err">{errors.street}</p> : ''}
              </label>
              <input name="street" type="text" onChange={handleChange} className="input-custom w-full" placeholder="Street" />
            </div>
            <div className="w-full">
              <label htmlFor="city">
                {errors && errors.city ? <p className="err">{errors.city}</p> : ''}
              </label>
              <input name="city" type="text" onChange={handleChange} className="input-custom w-full" placeholder="City" />
            </div>
            <div className="w-full">
              <label htmlFor="state">
                {errors && errors.state ? <p className="err">{errors.state}</p> : ''}
              </label>
              <input name="state" type="text" onChange={handleChange} className="input-custom w-full" placeholder="State" />
            </div>
            <div className="w-full">
              <label htmlFor="zip">
                {errors && errors.zip ? <p className="err">{errors.zip}</p> : ''}
              </label>
              <input name="zip" type="number" onChange={handleChange} className="input-custom w-full" placeholder="Zip Code" />
            </div>
            <div className="w-full">
              <button onClick={submit} className="btn btn-outline w-full bg-white hover:bg-purple-600">Submit</button>
              {errors && errors.main ? <p className="err">{errors.main}</p> : ''}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default AddressForm;
