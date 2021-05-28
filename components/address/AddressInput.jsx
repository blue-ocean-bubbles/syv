/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import AddressItem from './AddressItem';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.onChange(evt);
  }

  render() {
    return (
      <div>
        <div>
          <AddressItem id="street" value={this.props.street} onChange={this.handleChange} placeholder="Street" />
          <AddressItem id="city" value={this.props.city} onChange={this.handleChange} placeholder="City" />
          <AddressItem id="state" value={this.props.state} onChange={this.handleChange} placeholder="State" />
          <AddressItem id="postalCode" value={this.props.postalCode} onChange={this.handleChange} placeholder="Postal Code" />
          {/* <AddressItem id="country" value={this.props.country} onChange={this.handleChange} placeholder="Country" /> */}
        </div>
      </div>
    );
  }
}

export default AddressInput;
