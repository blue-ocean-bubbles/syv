/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AddressItem from './AddressItem';

class AddressSuggest extends Component {
  render() {
    return (
      <AddressItem
        value={this.props.query}
        onChange={this.props.onChange}
        placeholder="Type in your address here"
      />
    );
  }
}

export default AddressSuggest;
