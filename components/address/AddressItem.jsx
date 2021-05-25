import React, { Component } from 'react';

class AddressItem extends Component {
  render() {
    return (
        <div>
            <label >{this.props.label}</label>
            <div>
                <input
                  type="text"
                  id={this.props.id}
                  defaultValue={this.props.value}
                  onChange={this.props.onChange}
                  className="form-control"
                  placeholder={this.props.placeholder} />
            </div>
        </div>
      );
  }
}

export default AddressItem;