
import { React, useEffect, useState } from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { message, Layout } from "antd";
import SideMenu from './Sidemenu';
import "./NavBarmobile.css";



const NavBarmobile = ({ logout, type }) => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    const { Sider } = Layout;


    // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다. 
    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);
    const [isMobile, setIsMobile] = useState(false);

    // 화면 크기에 따라 모바일 여부 결정
    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768); // 예시 값, 모바일 화면 크기 조정 가능
    };

    useEffect(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (


        <div className="navbarmobile">
          {isMobile &&

    <ul className='nav-menu-mobile'>

        <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                <img src='greyhome.png' style={{ width: '20px', height: '20px' }}></img>
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/chart' className='nav-links' onClick={closeMobileMenu}>
                <img src='searchlogo.png' style={{ width: '20px', height: '20px' }}></img>

            </Link>
        </li>

        <li className='nav-item'>
            <Link to="/Footer" className='nav-links' onClick={closeMobileMenu}>
                <img src='greydlogo.png' style={{ width: '20px', height: '20px' }}></img>
            </Link>
        </li>


        {type && (
            <li className='nav-item'>
                <Link to='/Mypage' className='nav-links' onClick={closeMobileMenu}>
                    Mypage
                </Link>
            </li>)}

        <Sider width={"100"} >
            <SideMenu type={type} logout={logout} />
        </Sider>

    </ul>}

        </div>

    );
};

export default NavBarmobile;


