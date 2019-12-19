import React, { useRef } from 'react';

const Hobby = (props) => {
  let result = useRef([]);
  const handleChecked = (e) => {
    if(e.target.checked) {
      // 아래랑 같은 로직 : result.current = [...result.current, e.target.value]
      result.current = [...result.current].concat(e.target.value);
      // console.log("if", result.current)
    } else {
      result.current = [...result.current, e.target.value].filter(v => v !== e.target.value);
      // console.log("else", result.current)
    }
    props.onReciveData({
      name: 'hobby',
      value: result.current
    });
  }
  return (
  <li>
    <label htmlFor="">취미</label>
    <input type="checkbox" name="" onChange={handleChecked} value="연애"/> 연애
    <input type="checkbox" name="" onChange={handleChecked} value="게임"/> 게임
    <input type="checkbox" name="" onChange={handleChecked} value="영화보기"/> 영화보기
  </li>
  );
};

export default Hobby;