import React, { Component } from 'react';

class Hobby extends Component {
  state = {
    hobby: [],
  }
  handleChecked = (e) => {
    if(e.target.checked) {
      this.setState({ hobby: this.state.hobby.concat(e.target.value) })
    } else {
      this.setState({ hobby:this.state.hobby.filter(v => v !== e.target.value) })
    }

    this.props.onReciveData({
      name: 'hobby',
      value: this.state.hobby
    });
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