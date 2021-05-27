/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable react/sort-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import axios from 'axios';

// components
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';
import Background from '../components/background';

class CompleteSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
    this.contactSubmit = this.contactSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(field, e) {
    const { fields } = this.state;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  async contactSubmit(e) {
    try {
      e.preventDefault();
      if (this.handleValidation()) {
        const submit = await axios.post('/api/users', this.state.fields);
        if(submit.status === 201) {
          this.setState({
            fields: {},
            errors: {},
          });
        }
      } else {
        alert('Form has errors.');
      }
    } catch(err) {
      console.log(err)
    }
  }

  handleValidation() {
    const { fields } = this.state;
    const errors = {};
    let formIsValid = true;
    const specialChar = '!@#$%^&*';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let hasSpecial = false;
    let passLengthValid = false;
    let passUpper = false;
    let passLower = false;

    if (fields.password !== 'undefined') {
      if (!fields.email) {
        formIsValid = false;
        errors.email = 'Cannot be empty';
      }
      if (!fields.password) {
        formIsValid = false;
        errors.password = 'Cannot be empty';
      }
      for (let i = 0; i < specialChar.length; i++) {
        if (fields.password.includes(specialChar[i])) {
          hasSpecial = true;
        }
      }
      for (let i = 0; i < upperChars.length; i++) {
        if (fields.password.includes(upperChars[i])) {
          passUpper = true;
        }
      }
      for (let i = 0; i < lowerChars.length; i++) {
        if (fields.password.includes(lowerChars[i])) {
          passLower = true;
        }
      }
      if (fields.password.length >= 8 && fields.password.length <= 13) {
        passLengthValid = true;
      }
      this.setState({
        fields: {},
        errors: {},
      });
    }

    if (!passLower) {
      formIsValid = false;
      errors.password = 'At Least One Lowercase Letter Needed';
    }
    if (!passUpper) {
      formIsValid = false;
      errors.password = 'At Least One Uppercase Letter Needed';
    }
    if (!passLengthValid) {
      formIsValid = false;
      errors.password = 'Password must be at least 8 characters and less than 14';
    }
    if (!hasSpecial) {
      formIsValid = false;
      errors.password = 'Password must contain at least one special character !@#$%^&*';
    }

    if (fields.email !== 'undefined') {
      if (!fields.email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
        formIsValid = false;
        errors.email = 'Email is not valid';
        this.setState({
          fields: {},
          errors: {},
        });
      }
    }

    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      return formIsValid;
    }
    return null;
  }

  async signUpFacebook() {
    axios.get('/api/auth/facebook')
  }
  async signUpGoogle() {
    axios.get('/api/auth/google')
  }

  render() {
    console.log(this.state.fields)
    return (
      <div>
        <Navbar />
        <Background />
        <div className={styles.container}>
          <form className={styles.container} style={{ zIndex: '50' }} name="contactform" onSubmit={this.contactSubmit}>
            <div className="col-md-6">
              <fieldset>
                <input className={styles.links} refs="firstName" type="text" size="30" placeholder="First Name" onChange={this.handleChange.bind(this, 'firstName')} value={this.state.fields.firstName || ''} />
                <br />
                <input className={styles.links} refs="lastName" type="text" size="30" placeholder="Last Name" onChange={this.handleChange.bind(this, 'lastName')} value={this.state.fields.lastName || ''} />
                <br />
                <input className={styles.links} refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} value={this.state.fields.email || ''} />
                <br />
                <span style={{ color: 'red' }}>{this.state.errors.email}</span>
                <br />
                <input className={styles.links} refs="password" type="password" size="30" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} value={this.state.fields.password || ''} />
                <br />
                <span style={{ color: 'red' }}>{this.state.errors.password}</span>
                <br />
                <br />
                <input type="submit" value="Submit Email & New Password" className={styles.links} onClick={this.contactSubmit} />
              </fieldset>
            </div>
          </form>
          <a href='/api/auth/facebook' className='facebook'>Facebook</a>
          <a href='/api/auth/google' className='google'>Google</a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CompleteSignUp;