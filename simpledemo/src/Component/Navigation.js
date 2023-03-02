import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <React.Fragment>
      <header className={styles["main-header"]}>
        <nav>
          <ul className={styles["nav-link"]}>
            <li>
              <NavLink className={({isActive})=>isActive ? styles.active : ''} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? styles.active : ''} to="/about-us">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? styles.active : ''} to="/adduser">
                Add user
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? styles.active : ''} to="/updateuser">
                Updateuser
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? styles.active : ''} to="/contactus">
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
