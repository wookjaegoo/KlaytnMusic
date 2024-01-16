import { React, useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { message, Layout } from "antd";
import SideMenu from "./Sidemenu";
import "./NavBarmobile.css";

const NavBarmobile = ({ logout, type }) => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const { Sider } = Layout;

  const [hovered, setHovered] = useState(false);

  const [hoveredHome, setHoveredHome] = useState(false);
  const [hoveredChart, setHoveredChart] = useState(false);
  const [hoveredFooter, setHoveredFooter] = useState(false);

  return (
    <div className="navbarmobile">
      <ul className="nav-menu-mobile">
        <li
          className="nav-item"
          onMouseEnter={() => setHoveredHome(true)}
          onMouseLeave={() => setHoveredHome(false)}
        >
          <Link to="/home" className="nav-links">
            <img
              src={hoveredHome ? "redhome.png" : "greyhome.png"}
              style={{ width: "20px", height: "20px" }}
            ></img>
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => setHoveredChart(true)}
          onMouseLeave={() => setHoveredChart(false)}
        >
          <Link to="/chart" className="nav-links">
            <img
              src={hoveredChart ? "readsearch.png" : "searchlogo.png"}
              style={{ width: "20px", height: "20px" }}
            ></img>
          </Link>
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => setHoveredFooter(true)}
          onMouseLeave={() => setHoveredFooter(false)}
        >
          <Link to="/Footer" className="nav-links">
            <img
              src={hoveredFooter ? "reddlogo.png" : "greydlogo.png"}
              style={{ width: "20px", height: "20px" }}
            ></img>
          </Link>
        </li>

        {type && (
          <li
            className="nav-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Link to="/Mypage" className="nav-links">
              Mypage
            </Link>
          </li>
        )}

        {!type && (
          <li
            className="nav-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Link to="/Mypage" className="nav-links">
              go!
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBarmobile;
