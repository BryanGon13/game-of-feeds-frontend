import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <NavLink to='/'>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <span className={styles.title}> Game of Feeds</span>
                </div>
            </NavLink>

            <div className={styles.navMiddle}>
                <Nav className={styles.navLinks}>
                    <NavLink to='/' className={styles.navLink}><i className="fa-solid fa-house"></i>  Home</NavLink>
                    <NavLink to='/signin' className={styles.navLink}> <i className="fa-solid fa-arrow-right-to-bracket"></i>  Sign In</NavLink>
                    <NavLink to='/signup' className={styles.navLink}> <i className="fa-solid fa-user-plus"></i>  Sign Up!</NavLink>
                </Nav>
            </div>

            <div className={styles.signedIn}>
                <Navbar.Text>
                    Signed in as: <a href="#login">Bryan Gonzalez</a>
                </Navbar.Text>
            </div>
        </div>
    );
};

export default NavBar;