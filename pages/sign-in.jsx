/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';

const SignIn = () => (
  <div>
    <Navbar />
    <form className={styles.container}>
      <label style={{ fontSize: '25px' }}>
        Email Address:
        {' '}
        <br />
        <input type="text" name="name" className={styles.links} />
      </label>
      <label style={{ fontSize: '25px' }}>
        Password:
        {' '}
        <br />
        <input type="text" name="name" className={styles.links} />
      </label>
      <input type="submit" value="Log-in" className={styles.links} />
    </form>
    <Footer />
  </div>
);

export default SignIn;
