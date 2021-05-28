/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';

import FacebookIcon from '@material-ui/icons/Facebook';
// components
import Footer from '../components/footer';
import Navbar from '../components/navbar';

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
      for (let i = 0; i < specialChar.length; ++i) {
        if (fields.password.includes(specialChar[i])) {
          hasSpecial = true;
        }
      }
      for (let i = 0; i < upperChars.length; ++i) {
        if (fields.password.includes(upperChars[i])) {
          passUpper = true;
        }
      }
      for (let i = 0; i < lowerChars.length; ++i) {
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

  async contactSubmit(e) {
    try {
      e.preventDefault();
      if (this.handleValidation()) {
        const submit = await axios.post('/api/users', this.state.fields);
        if (submit.status === 201) {
          this.setState({
            fields: {},
            errors: {},
          });
        }
      } else {
        // alert('Form has errors.');
      }
    } catch (err) {
      // console.log(err);
    }
  }

  async signUpFacebook() {
    this.props.router.push('/api/auth/facebook');
  }

  async signUpGoogle() {
    this.props.router.push('/api/auth/google');
  }

  render() {
    return (
      <div>
        <Navbar>
          <div className="w-full h-full flex flex-col flex-grow mt-10">
            <form className="" style={{ zIndex: '50' }} name="contactform" onSubmit={this.contactSubmit}>
              <div className="">
                <fieldset className="flex flex-col gap-4 w-3/6 mx-auto">
                  <input className="input-custom" refs="firstName" type="text" size="30" placeholder="First Name" onChange={this.handleChange.bind(this, 'firstName')} value={this.state.fields.firstName || ''} />
                  <input className="input-custom" refs="lastName" type="text" size="30" placeholder="Last Name" onChange={this.handleChange.bind(this, 'lastName')} value={this.state.fields.lastName || ''} />
                  <input className="input-custom" refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} value={this.state.fields.email || ''} />
                  {this.state.errors.email && <span style={{ color: 'red' }}>{this.state.errors.email}</span>}
                  <input className="input-custom" refs="password" type="password" size="30" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} value={this.state.fields.password || ''} />
                  {this.state.errors.password && <span style={{ color: 'red' }}>{this.state.errors.password}</span>}
                  <a className="btn text-center bg-blue-700 text-white flex flex-row gap-4 justify-center items-center !p-6" href="/api/auth/facebook">
                    <FacebookIcon />
                    Facebook
                  </a>
                  <a className="btn text-center" href="/api/auth/google">
                    <i className="fab fa-google" />
                    Google
                  </a>
                  <input type="submit" value="Sign-Up" className="btn btn-purple" onClick={this.contactSubmit} />
                </fieldset>
              </div>
            </form>
          </div>
        </Navbar>
        <Footer />
      </div>
    );
  }
}

export default withRouter(CompleteSignUp);
