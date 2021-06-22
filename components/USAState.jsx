/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const USAState = (props) => (
  <path d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} state`} onClick={props.onClickState}>
    <title>{props.stateName}</title>
  </path>
);

export default USAState;
