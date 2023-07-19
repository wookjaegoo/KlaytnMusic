import React from "react";
import {useEffect,useState} from 'react'
import "./NavBar.css";
import metadata from "../data/metadata.json";
import { Link } from 'react-router-dom';
import {Button} from './Button';





const NavBar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다. 
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return (
    <div className="navbar">
            <div className = 'navbar-container'>
    
            {/* <i className="fab fa-spotify" ></i> */}
            <img src="flower.png" width="50" height="50" alt=""/>
            <div className="app-header">{metadata.appName}</div>
            {/* <div className="nav-links">
                <a
                    href="https://www.github.com/jessej-samuel/spotipy"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div> */}
        </div>

        
            <div className='menu-icon' onClick={handleClick}>
                <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick ={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/Footer" className='nav-links' onClick = {closeMobileMenu}>
                            Deploy
                        </Link>
                    </li>
                    
                    {/* <li className='nav-item'>
                        <Link to="/Profile" className='nav-links' onClick = {closeMobileMenu}>
                            Profile
                        </Link>
                    </li> */}

                    <li className='nav-item'>
                        <Link to='/Topchart' className='nav-links' onClick ={closeMobileMenu}>
                            Topchart
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/Register' className='nav-links' onClick ={closeMobileMenu}>
                        Register
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/SignIn' className='nav-links' onClick ={closeMobileMenu}>
                        SignIn
                        </Link>
                    </li>
                </ul>
        


    </div>
    );
};

export default NavBar;
