import React, { Component } from 'react';

class Month extends Component {
	checkLeapMonth = (e) => {
		this.props.onReciveData({
			name: e.target.name,
			value: e.target.value,
		})
	}
	render() {
		console.log("Month", this.props)
		const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
		const month = arr.map(v => <option key={v-1} value={v}>{v}</option>)
		// console.log(option)
		return (
			<>
			<select name="birthM" onChange={this.checkLeapMonth}>
				{this.props.selectedY ? month : ''}
			</select>
			월
			</>
		);
    }
}

export default Month;