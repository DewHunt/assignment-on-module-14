"use client";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isFailed, setIsFailed] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const jsonLoginResponse = await loginResponse.json();

    if (jsonLoginResponse["status"]) {
      window.location.href = "/dashboard";
    } else {
      setIsFailed(jsonLoginResponse["status"]);
      setErrorMessage(jsonLoginResponse["message"]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange("email", e.target.value);
                  }}
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <label htmlFor="pwd" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => {
                    handleChange("password", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                {isFailed === false ? (
                  <div className="text-danger">{errorMessage}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end">
                <button type="submit" className="btn btn-outline-success">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
