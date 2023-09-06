"use client";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      const result = await fetch("api/dashboard");
      const jsonResult = await result.json();
      setUserInfo(jsonResult.userInfo);
    })();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>User Info</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-striped">
              <tbody>
                <tr>
                  <td width="150px">Name</td>
                  <td width="20px">:</td>
                  <td>{userInfo ? userInfo.name : ""}</td>
                </tr>
                <tr>
                  <td width="150px">User Name</td>
                  <td width="20px">:</td>
                  <td>{userInfo ? userInfo.userName : ""}</td>
                </tr>
                <tr>
                  <td width="150px">Email</td>
                  <td width="20px">:</td>
                  <td>{userInfo ? userInfo.email : ""}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
