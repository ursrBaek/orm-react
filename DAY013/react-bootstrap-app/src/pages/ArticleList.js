import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList() {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <Link to={'/article/detail/1'}>aaaa</Link>
            </td>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <Link to={'/article/detail/2'}>bbbb</Link>
            </td>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <Link to={'/article/detail/3'}>cccc</Link>
            </td>
            <td>Jacob</td>
          </tr>
        </tbody>
      </table>
      <Link to={'/article/regist'}>
        <button type="button" className="btn btn-primary">
          작성하기
        </button>
      </Link>
    </>
  );
}

export default ArticleList;
