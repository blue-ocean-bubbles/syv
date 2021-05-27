/* eslint-disable */
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AddressForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    e.persist();
    setValues({ ...values, [name]: value });
  }
  const submit = async () => {
    const inputs = ['street', 'city', 'state', 'zip'];
    const errObj = {};
    // check to see if the input has any values
    for (let input of inputs) {
      if (!values[input]) {
        errObj[input] = 'Please fill out';
      }
    }
    // set the error object to state
    setErrors(errObj);
    // check if form contains any errors
    const errorKeys = Object.keys(errObj);
    if (errorKeys.length > 0) {
      errObj['main'] = '*Please make sure all fields are filled out completely.';
      return setErrors(errObj);
    } else {
      // if no errors, then submit form to update user's address
      const address = { ...values };
      const res = await axios({
        url:'/api/user',
        method: 'PUT',
        data: address
      });
      // if updated successfully
      if (res.status === 204) {
        router.push('/dashboard');
      }
    }
  }
  return (
    <div>
      {/* <Navbar /> */}
      <h2>Provide your address</h2>
      <div className="container">
        <p>Please register your address with us for the full experience of SYV</p>
        <div>
          <div>
            <label>
              Street
            <input name='street' type='text' onChange={handleChange} />
              {errors && errors['street'] ? <p className='err'>{errors['street']}</p> : ''}
            </label>
          </div>
          <div>
            <label>
              City
            <input name='city' type='text' onChange={handleChange} />
              {errors && errors['city'] ? <p className='err'>{errors['city']}</p> : ''}
            </label>
          </div>
          <div>
            <label>
              State
            <input name='state' type='text' onChange={handleChange} />
              {errors && errors['state'] ? <p className='err'>{errors['state']}</p> : ''}
            </label>
          </div>
          <div>
            <label>
              Zip
            <input name='zip' type='number' onChange={handleChange} />
              {errors && errors['zip'] ? <p className='err'>{errors['zip']}</p> : ''}
            </label>
          </div>
          <button onClick={submit}>Submit</button>
          {errors && errors['main'] ? <p className='err'>{errors['main']}</p> : ''}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddressForm;
