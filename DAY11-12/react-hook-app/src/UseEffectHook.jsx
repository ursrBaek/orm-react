import React, { useEffect, useState } from 'react';

function UseEffectHook() {
  console.log('컴포넌트 실행');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
  });

  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log('컴포넌트 마운트 직후 실행.');
    return () => {
      console.log('클린업');
    };
  }, []);

  return (
    <div>
      <h1>사용자정보관리</h1>
      <div>
        <h3>사용자 정보 입력영역</h3>
        <input value={user.name} name="name" onChange={onUserChange}></input>
        <input value={user.email} name="email" onChange={onUserChange}></input>
        <input value={user.password} name="password" onChange={onUserChange}></input>
        <input value={user.telephone} name="telephone" onChange={onUserChange}></input>

        <h3>사용자 입력정보 출력영여</h3>
        <div>이름:{user.name}</div>
        <div>메일:{user.email}</div>
        <div>암호:{user.password}</div>
        <div>전화번호:{user.telephone}</div>
      </div>
    </div>
  );
}

export default UseEffectHook;
