import React, { Component } from 'react';

class Date extends Component {
    render() {
			const arr = [];
			for (let i = 1910; i <= 2019; i++) {
				arr.push(i);
			}
			let key = 0;
			const opt = arr.map((v,i) => {
				key++;
				return <option key={key} value={v}>{v}</option>
			})

        return (
					<>
					<label htmlFor="">생년월일</label>

					<select name="">
					{ opt }
					</select>
					년                
					</>
        );
    }
}

export default Date;