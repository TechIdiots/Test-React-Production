import React, { useEffect, useState } from "react";
import logo from "../Assets/landing.jpg";
import user from "../Assets/c1.PNG";
import { Link } from 'react-router-dom';
import { List, X } from 'react-bootstrap-icons';
import MenuItem from "./MenuItem";
import "./topbar1.css";

export const menuItems = [
  {name: "Dashboard",to: "/",exact: true},
  {name: "Users",to: "/userList",exact: true},
  {name: "Members",to: "MemberList",exact: true},
  {name: "Content 2",to: "/",exact: true},
  {name: "Design 2",to: "/",exact: true},
  {name: "Design 3",to: "/",exact: true},
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <>
    <div onClick={() => setInactive(!inactive)} className={`toggle-menu-btn-outter toggle-menu-btn-outter-desk ${!inactive ? "" : "inactive"}`}>
        {inactive ? ( <List className="icon icon-desk" size="35" color="#333"/>) : "" }
    </div>
    <div className={`side-menu side-menu-desk ${!inactive ? "" : "inactive"}`}>
      <div className="top-section top-section-desk">
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn toggle-menu-btn-desk">
          {inactive ? "" : ( <X className="icon icon-desk" size="35"/> )}
        </div>
        <div className="logo logo-desk">
          <img src={logo} alt="webscript" />
        </div>
      </div>

      <div className="search-controller search-controller-desk">
        <input type="text" placeholder="search" />
      </div>

      <div className="divider divider-desk"></div>

      <div className="main-menu main-menu-desk">
          {menuItems.map((menuItem, index) => (
            <MenuItem key={index} name={menuItem.name} exact={menuItem.exact} to={menuItem.to} />
          ))}
          <button style={{backgroundColor: "#eb3a34"}} onClick={props.onClick}>
            <Link exact="true" to="/login" className="link">
            Logout
            </Link>
          </button>
      </div>

      <div className="side-menu-footer side-menu-footer-desk">
        <div className="avatar avatar-desk">
          <img src={user} alt="user" />
        </div>
        <div className="user-info user-info-desk">
          <h5>Yuvaraja Maniraj</h5>
          <p>yuvarajamaniraj@gmail.com</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideMenu;
