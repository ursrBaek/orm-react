import React from 'react';
import { FormGroup, Input, Button, Label, InputGroup } from 'reactstrap';

function ForgotPassword() {
  return (
    <>
      <FormGroup className="mb-4">
        <Label className="form-label">'Email'</Label>
        <InputGroup className="mb-3 bg-soft-light rounded-3">
          <span className="input-group-text border-light text-muted">
            <i className="ri-mail-line"></i>
          </span>
          <Input
            type="text"
            id="email"
            name="email"
            className="form-control form-control-lg border-light bg-soft-light"
            placeholder="Enter Email"
          />
        </InputGroup>
      </FormGroup>

      <div className="d-grid">
        <Button color="primary" block className="waves-effect waves-light" type="submit">
          Reset
        </Button>
      </div>
    </>
  );
}

export default ForgotPassword;
