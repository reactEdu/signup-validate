import React from 'react';

const Pw = (props) => {
  const handleChange = (e) => {
    props.onReciveData({
      name: e.target.name,
      value: e.target.value
    });
  }
  const {label, keyName} = props
  return (
    <li>
      <label htmlFor="">{label}</label>
      <input type="text" name={keyName} onChange={handleChange} value={props[keyName]}/>
    </li>
  );
};

export default Pw;