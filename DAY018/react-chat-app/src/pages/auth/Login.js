import React from 'react';
import { Link } from 'react-router-dom';

import { FormGroup, Input, Button, Label, InputGroup } from 'reactstrap';

function Login() {
  return (
    <>
      <div className="mb-3">
        <Label className="form-label">Username</Label>
        <InputGroup className="mb-3 bg-soft-light rounded-3">
          <span className="input-group-text text-muted" id="basic-addon3">
            <i className="ri-user-2-line"></i>
          </span>
          <Input
            type="text"
            id="email"
            name="email"
            className="form-control form-control-lg border-light bg-soft-light"
            placeholder="Enter email"
          />
        </InputGroup>
      </div>

      <FormGroup className="mb-4">
        <div className="float-end">
          <Link to="/auth/forgot-password" className="text-muted font-size-13">
            Forgot password?
          </Link>
        </div>
        <Label className="form-label">Password</Label>
        <InputGroup className="mb-3 bg-soft-light rounded-3">
          <span className="input-group-text text-muted">
            <i className="ri-lock-2-line"></i>
          </span>
          <Input
            type="password"
            id="password"
            name="password"
            className="form-control form-control-lg border-light bg-soft-light"
            placeholder="Enter Password"
          />
        </InputGroup>
      </FormGroup>

      <div className="form-check mb-4">
        <Input type="checkbox" className="form-check-input" id="remember-check" />
        <Label className="form-check-label" htmlFor="remember-check">
          Remember me
        </Label>
      </div>

      <div className="d-grid">
        <Button color="primary" block className=" waves-effect waves-light" type="submit">
          Sign in
        </Button>
      </div>
    </>
  );
}

export default Login;
