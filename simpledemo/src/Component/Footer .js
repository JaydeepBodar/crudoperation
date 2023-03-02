import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles["Footer-wrapper"]}>
        <div className={styles["footer-link"]}>
          <ul className={styles["footer-link"]}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/adduser"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Add user
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles["Address"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.25792223026!2d72.43965508311773!3d23.02018176229379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1675923647951!5m2!1sen!2sin"
            width="300px"
            height="200px"
            loading="lazy"
          ></iframe>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
