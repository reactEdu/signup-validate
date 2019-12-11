import React, { Component } from 'react';

class Hobby extends Component {
  state = {
    hobby: [],
  }
  handleChecked = (e) => {
    // console.log(e.target.checked)
    let result = {};
    if(e.target.checked) {
      result = { hobby: this.state.hobby.concat(e.target.value) };
      // this.setState({ hobby: this.state.hobby.concat(e.target.value) })
    } else {
      result = { hobby:this.state.hobby.filter(v => v !== e.target.value) };
      // this.setState({ hobby:this.state.hobby.filter(v => v !== e.target.value) })
    }
    this.setState(() => {
      return result
    }, () => {
      this.props.onReciveData({
        name: 'hobby',
        value: this.state.hobby
      });
    })
  }
  render() {
    return (
      <li>
        <label htmlFor="">취미</label>
        <input type="checkbox" name="" onChange={this.handleChecked} value="연애"/> 연애
        <input type="checkbox" name="" onChange={this.handleChecked} value="게임"/> 게임
        <input type="checkbox" name="" onChange={this.handleChecked} value="영화보기"/> 영화보기
      </li>
    );
  }
}

export default Hobby;