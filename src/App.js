import React, { Component } from 'react';
import './App.css';
import Id from './component/Id';
import Pw from './component/Pw';
import Introduce from './component/Introduce';
import Hobby from './component/Hobby';
import Gender from './component/ Gender';
import Date from './component/Date';

class App extends Component {
  isValidAll = true;
  state = {
      chkId: false,
      id: '',
      pw: '',
      pwChk: '',
      gender:'남',
      birthY: '',
      birthM: '',
      birthD: '',
      hobby: [],
      introduce: '',
  };
  // 자식 컴포넌트의 유효성 체크를 통과했는지 확인
  checkResultValid = (data) => {
    this.isValidAll = data;
  }
  // 자식 컴포넌트로부터 받은 값 setState
  handleReciveData = (data) => {
    const type = data.constructor;

    if(type === Object) {
      this.setState({ [data.name]: data.value })
    } else if(type === Array) {
      data.forEach((v, i) => {
        this.setState({ [v.name]: v.value })
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    if(!this.state.chkId) {
      alert("아이디 중복체크를 클릭 해주세요");
      return;
    }
    // 비밀번호는 12자리 이상 영문+숫자+특수문자2개이상
    let regPw = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W{2})).{12,}$/;
    if(!regPw.test(this.state.pw)) {
      alert("비밀번호는 12자리 이상 영문+숫자+특수문자 2개가 결합해야 함")
      return;
    }
    // 비밀번호와 비밀번호 확인이 일치
    if(this.state.pw !== this.state.pwChk) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않음")
      return;
    }
    // 생년월일 입력확인
    if(this.state.birthD === "" || this.state.birthM === "" || this.state.birthY === "") {
      alert("생년월일 선택해주세요.");
      return;
    }
    // 취미는 하나이상 선택되어야 한다.
    if(!(this.state.hobby.length > 0)) {
      alert("취미는 하나이상 선택해야함")
      return;
    }
    // 자기소개는 최소 20자 이상 입력해야 하고 입력될 때마다 하단의 0/300 숫자가 변해야 한다.
    if(this.state.introduce.length < 20) {
      alert("자기소개는 최소 20자 이상 입력")
      return;
    }
    alert("회원가입이 완료되었습니다.");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <Id onReciveData = {this.handleReciveData} onValidate = {this.checkResultValid} idText={this.state.id} vaild = {this.isValidAll} />
          <Pw onReciveData = {this.handleReciveData} label="비밀번호" keyName="pw" />
          <Pw onReciveData = {this.handleReciveData} label="비밀번호 확인" keyName="pwChk" />
          <Gender onReciveData = {this.handleReciveData} gender={this.state.gender} />
          <Date onReciveData = {this.handleReciveData} />
          <Hobby onReciveData = {this.handleReciveData}/>
          <Introduce onReciveData = {this.handleReciveData} introLen = {this.introLen}/>
          <li>
            <button>취소</button>
            <button type="submit">가입완료</button>
          </li>
        </ul>
        {JSON.stringify(this.state)}
      </form>
    );
  }
}

export default App;