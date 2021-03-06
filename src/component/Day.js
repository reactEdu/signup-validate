import React, { Component } from 'react';

class Day extends Component {
  handleChange = (e) => {
		this.props.onReciveData({
			name: e.target.name,
			value: e.target.value,
		})
  }
  render() {
    let birthM = this.props.dateInfo.birthM
    let tillDay = 0;
    const arr30 = ['4','6','9','11'];
    const arr31 = ['1','3','5','7','8','10','12'];
    const day = [];
    // console.log("day", this.props.dateInfo)
    if(arr31.indexOf(birthM) !== -1) {
      tillDay = 31;
    }else if(arr30.indexOf(birthM) !== -1) {
      tillDay = 30;
    }else if(birthM === "2"){
      if(this.props.dateInfo.isLeap) tillDay = 29;
      else tillDay = 28;
    }
    let key=1;
    day.push(<option key={0} value="">선택</option>)
    for (let i = 1; i <= tillDay; i++) {
      key++;
      day.push(<option key={key} value={i}>{i}</option>)
    }
    return (
      <>
      <select name="birthD" onChange={this.handleChange}>
        {this.props.selectedM ? day : ''}
      </select>
      일
      </>
    );
  }
}

export default Day;