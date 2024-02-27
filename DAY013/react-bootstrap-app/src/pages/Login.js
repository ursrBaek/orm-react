import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("메일주소를 입력해주세요."),
      password: Yup.string().required("암호를 입력해주세요."),
    }),
    onSubmit: (values) => {
      var loginData = {
        email: values.email,
        password: values.password,
      };
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          invalid={formik.touched.email && formik.errors.email ? true : false}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <Link to="#">password?</Link>
      </p>
    </form>
  );
};

export default Login;
