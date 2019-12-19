import React, { useRef } from 'react';

const Id = (props) => {
	const hasIds = useRef(['test', 'admin', 'userid']);
	const inputRef = useRef(null);

	const handleChange = (e) => {
		props.onReciveData({
			name: e.target.name,
			value: e.target.value
		});
	}

	const handlerClick = (e) => {
		e.preventDefault();
		const { onValidate, idText } = props;
		const reg = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{10,}$/; // 10자리 이상 영문+숫자+특수문자
		// idText값이 hasIds에 존재하는지 확인
		if(hasIds.current.indexOf(idText) !== -1) {
			alert("기존에 있는 유저아이디라서 사용할 수 없음");
			onValidate(false);
			inputRef.current.focus();
		} else if(!reg.test(idText)){
			alert("아이디는 10자리 이상 영문+숫자+특수문자가 결합해야 함");
			onValidate(false);
			inputRef.current.focus();
		} else {
			alert("사용 가능한 아이디입니다.");
			props.onReciveData({
				name: 'chkId',
				value: true
			});
		}
	}

	return (
	<li>
		<label htmlFor="">ID</label>
		<input ref={inputRef} name="id" onChange={handleChange} value={props.id}/>
		<button type="button" onClick={handlerClick}>중복체크</button>
	</li>
	);
};

export default Id;