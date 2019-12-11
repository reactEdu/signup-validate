import React, { Component } from 'react';

class Year extends Component {
	checkLeapYear = (e) => {
		const year = e.target.value;
		let isLeap = false;

		if((year%4===0 && year%100!==0) || year%400===0) {
			isLeap = true;
			// alert("운년");
		}

		this.props.onReciveData({
			name: e.target.name,
			value: e.target.value,
			isLeap: isLeap,
		})
	}

	render() {
		const year = [];
		let key = 1;
		year.push(<option key={0} value={0}>선택</option>)
		for (let i = 1910; i <= 2019; i++) {
			key++;
			year.push(<option key={key} value={i}>{i}</option>);
		}

		return (
			<>
			<label htmlFor="">생년월일</label>
			<select name="birthY" onChange={this.checkLeapYear}>
			{ year }
			</select>
			년                
			</>
		);
	}
}

export default Year;