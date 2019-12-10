import React, { Component } from 'react';

class Pw extends Component {
  state = {
    [this.props.keyName]: '',
  }

  handleChange = (e) => {
    const key = this.props.keyName;
    if(key === 'pw') {
      this.setState({'pw': e.target.value})
    } else if(key === 'pwChk') {
      this.setState({'pwChk': e.target.value})
    }
    this.props.onReciveData({
      name: e.target.name,
      value: e.target.value
    });
  }

  render() {
    const {keyName} = this.props;
    return (
    <li><label htmlFor="">{keyName === 'pw' ? '비밀번호' : '비밀번호 확인'}</label><input type="text" name={keyName} onChange={this.handleChange} value={this.state[keyName]}/></li>
    );
  }
}

export default Pw;