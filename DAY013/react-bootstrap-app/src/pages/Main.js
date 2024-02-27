import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-wrapper">
      <h1>메인 페이지</h1>
      <Link to={'/article/list'}>게시글 목록 보기</Link>
    </div>
  );
};

export default Main;
