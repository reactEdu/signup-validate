import React, { Component } from 'react';

class Introduce extends Component {
  state = {
    introduce: '',
    introLength: 0
  }
  handleChange = (e) => {
    this.setState({
      introduce: e.target.value,
      introLength: e.target.value.length,
    });
    // 한번에 묶어서 보낼수 있는 방법 없을지 생각해보기
    // 배열로 보내면 받은쪽에서 배열로 데이터가 올 경우 알아서 찢어넣는 로직 넣는게 나은건지...?
    this.props.onReciveData({
      name: 'introduce',
      value: e.target.value
    });
    this.props.onReciveData({
      name: 'introLength',
      value: e.target.value.length
    });
  }

  render() {
    return (
      <li>
        <label htmlFor="">자기소개</label>
        <textarea cols="30" rows="10" name="introduce" onChange={this.handleChange}
        value={this.state.introduce}>
        </textarea>
        <p className="tar"><span>{this.state.introLength}</span>/300</p>
      </li>
    );
  }
}

export default Introduce;