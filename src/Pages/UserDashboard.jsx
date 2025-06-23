import React from "react";
import Button from "react-bootstrap/Button";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaRegSmileBeam } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div id="topdash">
        <h1>
          Welcome! User <FaRegSmileBeam />
        </h1>
      </div>

      <div id="mainPG">
        <div id="topvar">
          <h2>Dashboard!</h2>
          <Button id="btn2" onClick={logout}>
            Log out!
          </Button>
        </div>
        <div className="sidebar">
          <section id="dividedash">
            <div id="sidevar">
              <ul>
                <li>Overview</li>
                <li>
                  <Link to="usertask" id="link">
                    My Task
                  </Link>
                </li>
                <li>
                  <Link to="changepass" id="link">
                    Change Password
                  </Link>
                </li>
                <li>Services</li>
                <li>Logout</li>
              </ul>
            </div>
          </section>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
