import React from 'react';

// bootstrap css 파일 직접 참조
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Sass 파일 참조
import '../node_modules/bootstrap/scss/bootstrap.scss';

// 라우팅을 위한 react-router-dom 패키지의 BrowserRouter, Routes, Route 참조
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GNB from './components/GNB';
import Footer from './components/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import ArticleList from './pages/ArticleList';
import ArticleRegist from './pages/ArticleRegist';
import ArticleDetail from './pages/ArticleDetail';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      {/* 상단 GNB 공통 레이아웃 메뉴 영역 */}
      <GNB />
      <div className="App">
        {/* 최상위 컴포넌트에 전체 어플리케이션 레이아웃 구성 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />
          <Route
            path="/article/list"
            element={
              <MainLayout>
                <ArticleList />
              </MainLayout>
            }
          />
          <Route
            path="/article/regist"
            element={
              <MainLayout>
                <ArticleRegist />
              </MainLayout>
            }
          />
          <Route
            path="/article/detail/:articleNum"
            element={
              <MainLayout>
                <ArticleDetail />
              </MainLayout>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
