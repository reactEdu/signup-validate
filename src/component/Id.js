import React, { Component } from 'react';

class Id extends Component {
    state = {
			id: '',
			hasIds: ['test', 'admin', 'userid'],
		}
		// ipt;
		ipt = React.createRef(); 

    handleChange = (e) => {
			this.setState({id: e.target.value})
			this.props.onReciveData({
				name: e.target.name,
				value: e.target.value
			});
		}
		
    handlerClick = (e) => {
			e.preventDefault();
			const {onValidate} = this.props;
			const reg = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{10,}$/; // 10자리 이상 영문+숫자+특수문자
			// state의 id값이 hasIds에 존재하는지 확인
			if(this.state.hasIds.indexOf(this.state.id) !== -1) {
				alert("기존에 있는 유저아이디라서 사용할 수 없음");
				onValidate(false);
				// this.ipt.focus();
				this.ipt.current.focus();
			} else if(!reg.test(this.state.id)){
				alert("아이디는 10자리 이상 영문+숫자+특수문자가 결합해야 함");
				onValidate(false);
				// this.ipt.focus();
				this.ipt.current.focus();
			} else {
				alert("사용 가능한 아이디입니다.");
				this.props.onReciveData({
					name: 'chkId',
					value: true
				});
			}

    }
    render() {
        // console.log(this.props.data)
        return (
            <li>
							<label htmlFor="">ID</label>
							{/* <input ref={(ref) => {this.ipt = ref}} name="id" onChange={this.handleChange} value={this.state.id}/> */}
							<input ref={this.ipt} name="id" onChange={this.handleChange} value={this.state.id}/>
							<button type="button" onClick={this.handlerClick}>중복체크</button>
						</li>
        );
    }
}

export default Id;