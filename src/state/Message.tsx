import React, { useState } from 'react';

export const Message = () => {
  // message state 를 사용해서
  const [message, setMessage] = useState('');

  // 해당 이벤트 리스너를 사용하면 e.target 의 값을 message 에 세팅하겠다
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(`${e.target.value}`);
  };

  return (
    <div>
      {/* input 에 입력된 값(e.target.value)을 message state 에 설정하고 */}
      <input onChange={onChange} />
      {/* message 의 값이 수정되면 <p> 에 렌더링 하겠다 */}
      <p>Inserted message: {message}</p>
    </div>
  );
};
