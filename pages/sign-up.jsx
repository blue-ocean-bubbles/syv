import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AddressForm from '../components/address/AddressForm';

const SignUp = () => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row" />
      <AddressForm />
    </div>
    <Footer />
  </div>
);

export default SignUp;
