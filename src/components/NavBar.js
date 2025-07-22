import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" className={styles.logo} />
                <span className={styles.title}> Game of Feeds</span>
            </div>

            <div className={styles.navMiddle}>
                <Nav className={styles.navLinks}>
                    <Nav.Link className={styles.navLink}><i class="fa-solid fa-house"></i>  Home</Nav.Link>
                    <Nav.Link className={styles.navLink}> <i class="fa-solid fa-arrow-right-to-bracket"></i>  Sign In</Nav.Link>
                    <Nav.Link className={styles.navLink}> <i class="fa-solid fa-user-plus"></i>  Sign Up!</Nav.Link>
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