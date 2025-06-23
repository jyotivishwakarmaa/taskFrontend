import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>The Taskify</h2>
          <p>Your reliable partner in task management and productivity.</p>
        </div>

        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/tasks">My Tasks</a>
            </li>
            <li>
              <a href="/calendar">Calendar</a>
            </li>
            <li>
              <a href="/reports">Reports</a>
            </li>
          </ul>
        </div>

        <div className="footer-resources">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="/help">Help Center</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Taskify | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer