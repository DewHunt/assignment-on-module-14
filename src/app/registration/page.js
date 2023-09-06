"use client";
import { useState } from "react";

const Registration = () => {
  const randomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "Dew Hunt",
    userName: "dewhunt",
    email: "dew.fog1553@gmail.com",
    password: "12345",
    verificationCode: randomNumber(),
    isVerified: false,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleChange("id", Date.now());
    await handleChange("verificationCode", randomNumber());

    const registrationResponse = await fetch("api/registration", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const jsonRegistrationResponse = await registrationResponse.json();

    if (jsonRegistrationResponse["status"]) {
      const mailInfo = {
        email: formData.email,
        mailSubject: "Test Email Verification",
        mailText: `Your One Time Password for email verification is ${formData.verificationCode}. Do not share OTP with anyone else.`,
      };
      window.location.href = "/email-verification";
      await fetch("api/send-email", {
        method: "POST",
        body: JSON.stringify(mailInfo),
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <label htmlFor="email" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => {
                    handleChange("name", e.target.value);
                  }}
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <label htmlFor="email" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your user name"
                  value={formData.userName}
                  onChange={(e) => {
                    handleChange("userName", e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => {
                    handleChange("password", e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-end">
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

export default Registration;
