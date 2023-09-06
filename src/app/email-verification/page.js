"use client";
import { useState } from "react";

const EmailVerification = () => {
  const [otp, setOtp] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const verifyResponse = await fetch("api/email-verification", {
      method: "POST",
      body: JSON.stringify({ otp }),
    });
    const jsonVerifyResponse = await verifyResponse.json();
    if (jsonVerifyResponse["status"]) {
      window.location.href = "/login";
    } else {
      setIsVerified(jsonVerifyResponse["status"]);
      setErrorMessage(jsonVerifyResponse["message"]);
    }
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 mb-3">
                <label htmlFor="pwd" className="form-label">
                  OTP
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter One Time Password"
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                />
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-2">
                <label htmlFor=""></label>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-block">
                    Verify
                  </button>
                </div>
              </div>
            </div>
            {isVerified === false ? (
              <div className="text-danger">{errorMessage}</div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
