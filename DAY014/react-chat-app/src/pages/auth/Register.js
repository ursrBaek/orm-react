import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Input, Button, Label, InputGroup } from 'reactstrap';

function Register() {
  return (
    <>
      <div className="mb-3">
        <Label className="form-label">Email</Label>
        <InputGroup className="input-group bg-soft-light rounded-3 mb-3">
          <span className="input-group-text text-muted">
            <i className="ri-mail-line"></i>
          </span>
          <Input
            type="text"
            id="email"
            name="email"
            className="form-control form-control-lg bg-soft-light border-light"
            placeholder="Enter Email"
          />
        </InputGroup>
      </div>

      <div className="mb-3">
        <Label className="form-label">Username</Label>
        <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
          <span className="input-group-text border-light text-muted">
            <i className="ri-user-2-line"></i>
          </span>
          <Input
            type="text"
            id="username"
            name="username"
            className="form-control form-control-lg bg-soft-light border-light"
            placeholder="Enter Username"
          />
        </InputGroup>
      </div>

      <FormGroup className="mb-4">
        <Label className="form-label">Password</Label>
        <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
          <span className="input-group-text border-light text-muted">
            <i className="ri-lock-2-line"></i>
          </span>
          <Input
            type="password"
            id="password"
            name="password"
            className="form-control form-control-lg bg-soft-light border-light"
            placeholder="Enter Password"
          />
        </InputGroup>
      </FormGroup>

      <div className="d-grid">
        <Button color="primary" block className=" waves-effect waves-light" type="submit">
          Register
        </Button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-muted mb-0">
          By registering you agree to the Chatvia{' '}
          <Link to="#" className="text-primary">
            Terms of Use
          </Link>
        </p>
      </div>
    </>
  );
}

export default Register;
