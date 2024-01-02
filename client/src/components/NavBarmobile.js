import { React, useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { message, Layout } from "antd";
import SideMenu from "./Sidemenu";
import "./NavBarmobile.css";

const NavBarmobile = ({ logout, type }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);
  const { Sider } = Layout;

  const [hovered, setHovered] = useState(false);

  const [hoveredHome, setHoveredHome] = useState(false);
  const [hoveredChart, setHoveredChart] = useState(false);
  const [hoveredFooter, setHoveredFooter] = useState(false);

  // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다.
  // useEffect(() => {
  //     showButton();
  // }, []);
  // window.addEventListener('resize', showButton);
  const [isMobile, setIsMobile] = useState(false);
  // 화면 크기에 따라 모바일 여부 결정
  const checkMobile = () => {
    const siderElement = document.querySelector(
      "#root > div.navbarmobile > ul  > li:nth-child(4)> aside",
    );
    const menuItem = document.querySelector(
      "#root > div.navbarmobile > ul > li:nth-child(4) > aside > div > ul > li",
    );
    const menuTitleContentElement = document.querySelector(
      "#root > div.navbarmobile > ul> li:nth-child(4)  > aside > div > ul > li > span",
    );
    const menuElement = document.querySelector(
      "#root > div.navbarmobile > ul > li:nth-child(4)>  aside > div > ul",
    );

    if (siderElement) {
      // siderElement.style.maxWidth = '100px';
      siderElement.style.minWidth = "70px";
      siderElement.style.minHeight = "70px";
      siderElement.style.width = "100%";
      siderElement.style.height = "100%";
    }
    if (menuItem) {
      menuItem.style.display = "flex";
      menuItem.style.paddingInline = "0px";
      menuItem.style.height = "50px";
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
  };

  // useEffect(() => {
  //     setIsMobile(window.innerWidth <= 768); // 예시 값, 모바일 화면 크기 조정 가능
  //     checkMobile();

  //     return () => {
  //         window.removeEventListener('resize', checkMobile);
  //     };
  // }, []);

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

        {/* <li className='nav-item'>
                        <Sider  >
                            <SideMenu type={type} logout={logout} />
                        </Sider>

                    </li> */}
      </ul>
    </div>
  );
};

export default NavBarmobile;
