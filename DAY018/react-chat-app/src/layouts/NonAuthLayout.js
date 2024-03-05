import React from 'react';
import { Container, Row, Col, Card, CardBody, Form } from 'reactstrap';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

//Import Images
import logodark from '../assets/images/logo-dark.png';
import logolight from '../assets/images/logo-light.png';
import { formBottomComp, pageNameObj } from './utils';

function NonAuthLayout() {
  const { pathname } = useLocation();
  const pageName = pathname.split('/')[2];
  const showText = pageNameObj[pageName] || { header: '제목', message: '내용내용' };

  return (
    <div className="account-pages my-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <div className="text-center mb-4">
              <Link to="/" className="auth-logo mb-5 d-block">
                <img src={logodark} alt="" height="30" className="logo logo-dark" />
                <img src={logolight} alt="" height="30" className="logo logo-light" />
              </Link>

              <h4>{showText.header}</h4>
              <p className="text-muted mb-4">{showText.message}</p>
            </div>

            <Card>
              <CardBody className="p-4">
                <div className="p-3">
                  <Form>
                    <Outlet />
                  </Form>
                </div>
              </CardBody>
            </Card>

            <div className="mt-5 text-center">
              {formBottomComp[pageName]}
              <p>
                © {new Date().getFullYear()} Chatvia. Crafted with <i className="mdi mdi-heart text-danger"></i> by
                Themesbrand
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NonAuthLayout;
