import React, { useState, useContext } from "react";
import { Nav, NavMenu, Ul, NavToggle } from "./SideNav.styled";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { SideNavData } from "./SideNavData";
import { User } from "../../../App";
import axios from "../http";
import swal from "sweetalert";
import "./SideNav.css";

const SideNavBar = () => {
  const { user, setUser, setToken } = useContext(User);
  const [sidebar, setSidebar] = useState(false);
  // const history = useHistory();

  const logout = async () => {
    try {
      sessionStorage.clear();
      await axios.post("auth/logout");
      swal({
        title: "Esperamos volver a verte",
        text: "  ",
        icon: "success",
        button: false,
        timer: "1800",
      });
      setUser(null);
      setToken(null);
      //sessionStorage.clear();
      // history.push("/login");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1800);
    } catch (e) {
      swal({
        title: "Error interno",
        text: "Vuelve a intentarlo en unos momentos...",
        icon: "error",
        button: false,
        timer: "3000",
      });
      // sessionStorage.clear();
      // setTimeout(() => {
      //   window.location.href = "/login";
      // }, 1800);
    }
  };

  const logged = user ? (
    <span className="navSpan">
      Welcome {user.username} |{" "}
      <Link onClick={logout} className="logged">
        Logout
      </Link>
    </span>
  ) : (
    <Link to="/login" className="logged">
      <FontAwesomeIcon icon={faUser} />
      <span> Login</span>
    </Link>
  );

  const verifyUser = user
    ? // SideNavData.map((item, index) => {
      //   if (user.id_profesor != null) {
      //     return (
      //       <li key={index} className={item.cName}>
      //         <Link to={item.path}>{item.icon}</Link>
      //       </li>
      //     );
      //   } else {
      //     return (
      //       <li key={index} className={item.cName}>
      //         <Link to={item.path}>{item.icon}</Link>
      //       </li>
      //     );
      //   }
      // });
      SideNavData.map((item, index) => {
        if (user.id_profesor !== null) {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>{item.icon}</Link>
            </li>
          );
        } else {
          if (item.path !== "/componentes" && item.path !== "/compuestos") {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          }
        }
      })
    : SideNavData.map((item, index) => {
        if (item.path == "/") {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>{item.icon}</Link>
            </li>
          );
        }
      });

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Nav className="navbar">
        <Link to="#" className="menu-bars">
          <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
        </Link>
        {logged}
      </Nav>
      <NavMenu className={sidebar ? "nav-menu active" : "nav-menu"}>
        <Ul className="nav-menu-items">
          <NavToggle className="navbar-toggle">
            <Link to="#" className="menu-times">
              <FontAwesomeIcon icon={faTimes} onClick={showSidebar} />
            </Link>
          </NavToggle>
          <li>{verifyUser}</li>
        </Ul>
      </NavMenu>
    </>
  );
};

export default SideNavBar;
