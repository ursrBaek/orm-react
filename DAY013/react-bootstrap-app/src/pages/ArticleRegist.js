import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArticleRegist() {
  let navigate = useNavigate();
  return (
    <form
      onSubmit={() => {
        alert('작성완료.');
        navigate('/article/list');
      }}
    >
      <div className="mb-3 text-start">
        <label htmlFor="articleTitle" className="form-label text-end">
          제목
        </label>
        <input type="text" className="form-control" id="articleTitle" />
      </div>
      <div className="mb-3  text-start">
        <label htmlFor="articleContent" className="form-label">
          글 내용
        </label>
        <textarea className="form-control" id="articleContent" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        게시글 등록
      </button>
    </form>
  );
}

export default ArticleRegist;
