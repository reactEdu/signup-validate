import React, { useState } from 'react';

const Introduce = (props) => {
  const [introLength, setIntroLength] = useState(0)
  const handleChange = (e) => {
    setIntroLength(e.target.value.length);
    // 배열로 보내면 받은쪽에서 배열로 데이터가 올 경우 알아서 찢어넣는 상태 넣음
    props.onReciveData(
      [
        {
          name: 'introduce',
          value: e.target.value
        },
        {
          name: 'introLength',
          value: e.target.value.length
        }
      ]
    );
  }
  
  return (
    <li>
      <label htmlFor="">자기소개</label>
      <textarea cols="30" rows="10" name="introduce" onChange={handleChange}
      value={props.introduce}>
      </textarea>
      <p className="tar"><span>{introLength}</span>/300</p>
  </li>
  );
};

export default Introduce;