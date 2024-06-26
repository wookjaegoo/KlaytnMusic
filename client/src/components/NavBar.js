import { React, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";
import metadata from "../data/metadata.json";
import { Link } from "react-router-dom";
import { message, Layout } from "antd";
import SideMenu from "./Sidemenu";

const NavBar = ({ logout, type }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { Sider } = Layout;

  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기에 따라 모바일 여부 결정
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768); // 예시 값, 모바일 화면 크기 조정 가능
  };

  useEffect(() => {
    checkMobile();
  }, []);

  const siderElement = document.querySelector(
    "#root > div.navbar > div > aside"
  );

  const menuItem = document.querySelector(
    "#root > div.navbar > div > aside > div > ul > li"
  );
  const menuTitleContentElement = document.querySelector(
    "#root > div.navbar > div > aside > div > ul > li > span"
  );
  const menuElement = document.querySelector(
    "#root > div.navbar > div > aside > div > ul"
  );
  const mypage = document.querySelector(
    "#root > div.navbarmobile > ul > li:nth-child(4) > a"
  );
  if (siderElement) {
    siderElement.style.minWidth = "70px";
    siderElement.style.minHeight = "70px";
    siderElement.style.width = "100px";
    siderElement.style.height = "50%";
    siderElement.style.flex = "0 0 0";
    siderElement.style.position = "absolute";
    siderElement.style.right = "0";
    siderElement.style.marginBlock = "0";
  }
  if (menuItem) {
    menuItem.style.display = "flex";
    menuItem.style.paddingInline = "0px";
    menuItem.style.height = "100%";
    menuItem.style.width = "100%";
    menuItem.style.marginInline = "0px";
    menuItem.style.justifyContent = "center";
    menuItem.style.alignItems = "center";
    menuItem.style.background = "none";
  }

  if (menuTitleContentElement) {
    menuTitleContentElement.style.width = "60px";
    menuTitleContentElement.style.height = "50px";
    menuTitleContentElement.style.display = "flex";
    menuTitleContentElement.style.justifyContent = "center";
    menuTitleContentElement.style.alignItems = "center";

    menuTitleContentElement.addEventListener("mouseleave", function () {
      this.style.color = "white"; // 마우스가 벗어났을 때의 스타일 (기본값으로 복원)
    });
    menuTitleContentElement.addEventListener("mouseenter", function () {
      this.style.color = "blue"; // 마우스가 올라갔을 때의 스타일
    });
  }
  if (menuElement) {
    menuElement.style.background = "black";
    menuElement.style.height = "70px";
  }
  if (mypage) {
    mypage.addEventListener("mouseenter", function () {
      this.style.color = "blue"; // 마우스가 올라갔을 때의 스타일
    });
    mypage.addEventListener("mouseleave", function () {
      this.style.color = "white"; // 마우스가 올라갔을 때의 스타일
    });
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src="newlogo.png" width="50" height="50" alt="" />
        </div>

        <Sider>
          <SideMenu type={type} logout={logout} />
        </Sider>
      </div>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
            <img
              src="greyhome.png"
              style={{ width: "20px", height: "20px" }}
            ></img>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chart" className="nav-links" onClick={closeMobileMenu}>
            <img
              src="searchlogo.png"
              style={{ width: "20px", height: "20px" }}
            ></img>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Footer" className="nav-links" onClick={closeMobileMenu}>
            <img
              src="greydlogo.png"
              style={{ width: "20px", height: "20px" }}
            ></img>
          </Link>
        </li>

        {type && (
          <li className="nav-item">
            <Link to="/Mypage" className="nav-links" onClick={closeMobileMenu}>
              Mypage
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
