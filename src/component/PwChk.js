import React, { Component } from 'react';
/*
  @deprecate : 안씀
*/
class PwChk extends Component {
  state = {
    pwChk : '',
  }

  handleChange = (e) => {
    this.setState({pwChk: e.target.value})
    this.props.onReciveData({
      name: e.target.name,
      value: e.target.value
    });
  }

  render() {
    return (
        <li><label htmlFor="">비밀번호 확인</label><input type="text" name="pwChk" onChange={this.handleChange} value={this.state.pwChk}/></li>
    );
  }
}

export default PwChk;