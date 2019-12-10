import React, { Component } from 'react';

class  Gender extends Component {
  state = {      
    gender:'남',
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    this.props.onReciveData({
      name: e.target.name,
      value: e.target.value
    });
  }
  render() {
    return (
      <li>
        <label htmlFor="">성별</label>
        <input type="radio" name="gender" checked={this.state.gender === '남'} onChange={this.handleChange} value="남"/>남 
        <input type="radio" name="gender" onChange={this.handleChange} value="여"/>여
      </li>
    );
  }
}

export default  Gender;