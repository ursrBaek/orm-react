import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ArticleDetail() {
  const { articleNum } = useParams();
  return (
    <>
      <div>
        <p>순번: {articleNum}</p>
        <p>제목: ㄱㄴㄷ</p>
        <p>내용: abcde</p>
      </div>
      <Link to={'/article/list'}>
        <button type="button" className="btn btn-primary">
          목록보기
        </button>
      </Link>
    </>
  );
}

export default ArticleDetail;
