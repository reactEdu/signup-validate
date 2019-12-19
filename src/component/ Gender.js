import React from 'react';

const  Gender = (props) => {
  const handleChange = (e) => {
    props.onReciveData({
      name: e.target.name,
      value: e.target.value
    });
  }
  return (
    <li>
      <label htmlFor="">성별</label>
      <input type="radio" name="gender" checked={props.gender==="남"} onChange={handleChange} value="남"/>남 
      <input type="radio" name="gender" checked={props.gender==="여"} onChange={handleChange} value="여"/>여
    </li>
  );
};

export default  Gender;