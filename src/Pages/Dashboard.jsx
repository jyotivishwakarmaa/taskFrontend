import React from 'react'
import Button from "react-bootstrap/Button";
import {Outlet, Link, useNavigate } from 'react-router-dom';
import { BsFillEmojiSmileFill } from "react-icons/bs";
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
          Welcome! Admin <BsFillEmojiSmileFill />{" "}
          {localStorage.getItem("adminuser")}
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
                  <Link to="user" id="link">
                    Create User
                  </Link>
                </li>
                <li>
                  <Link to="assigntask" id="link">
                    Assign new Task
                  </Link>
                </li>
                <li>
                  <Link to="taskdetail" id="link">
                    Task Details
                  </Link>
                </li>

                {/* <li>
                  <Link to="search" id="link">
                    Search Task
                  </Link>
                </li> */}
                <li>
                  <Link to="test" id="link">
                    All Tasks
                  </Link>
                </li>
                <li>Logout</li>
              </ul>
            </div>
          </section>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard