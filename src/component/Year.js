import React, { Component } from 'react';

class Year extends Component {
	render() {
		const month = [1,2,3,4,5,6,7,8,9,10,11,12];
		const option = month.map(v => <option key={v-1} value="{v}">{v}</option>)
		// console.log(option)
		return (
				<>
					<select name="">
						{option}
					</select>
					월
				</>
		);
    }
}

export default Year;