/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';
import Background from '../components/background';

const SignIn = () => (
  <div>
    <Navbar />
    <Background />
    <div className={styles.container}>
      <form className={styles.container} style={{ zIndex: '50' }}>
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
    </div>
    <Footer />
  </div>
);

export default SignIn;
