import React, { Component } from 'react';
import Year from './Year';
import Month from './Month';
import Day from './Day';
/*
0. 연도와 월만 먼저 생성
1. 먼저 연도를 선택하고 윤년인지 체크
2. 월을 선택했을때 2월이고 윤년이면 29일 생성 아니면 28일 생성

월을 선택시 해당 월에 맞는 일자까지만 일 셀렉트 박스에 노출된다.
ex : 4월 선택시 30일까지. 5월선택시 31일까지. 
단, 2월은 윤년을 고려하여 28일 또는 29일로 나타나게 한다.
*/
class Date extends Component {
  selectedY = false; // 연 선택여부
  selectedM = false; // 월 선택여부
  state = {
    isLeap: false, // 윤년 여부
    birthY: '',
    birthM: '',
    birthD: '',
  }
  // 자식 컴포넌트로부터 받은 값 setState
  handleReciveData = (data) => {
    console.log("data", data);
    if(data.name ===  "birthY") {
      // console.log("y", this.state);
      this.selectedY = true;
      this.selectedM = false;
      this.setState({
        isLeap: data.isLeap,
        birthY: data.value,
        birthM: '',
        birthD: '',
      });
      // console.log("outer", this.state);
    } else if(data.name ===  "birthM") {
      if(this.state.birthY === "") {
        alert("연도를 선택해주세요.")
        return;
      }
      this.selectedM = true;
      this.setState({
        birthM: data.value,
        birthD: '',
      });
    } else if(data.name ===  "birthD"){
      if(this.state.birthM === "") {
        alert("월을 선택해주세요.")
        return;
      }

      this.setState((prevState) => {
        return {
          birthD: data.value,
        }; 
      }, () => {
        console.log("callback", this.state);
        // 부모로 올림
        this.props.onReciveData({
          name: 'birthY',
          value: this.state.birthY,
        })
        this.props.onReciveData({
          name: 'birthM',
          value: this.state.birthM,
        })
        this.props.onReciveData({
          name: 'birthD',
          value: this.state.birthD,
        })
      });
    }
  }
  render() {
    return (
      <li>
        <Year onReciveData = {this.handleReciveData}/>
        <Month onReciveData = {this.handleReciveData} selectedY={this.selectedY}/>
        <Day onReciveData = {this.handleReciveData} selectedM={this.selectedM}
         dateInfo={this.state}/>
      </li>
    );
  }
}

export default Date;