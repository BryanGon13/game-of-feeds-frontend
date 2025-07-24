import React from "react";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.SideBar}>
            <div>
                <div className={styles.Logo}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" height="45" />
                    </NavLink>
                </div>
                <div className={styles.NavItems}>
                    <NavLink
                        exact
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        to="/"
                    >
                        <i className="fas fa-home"></i> <span className={styles.text}>Home</span>
                    </NavLink>
                    {currentUser && (
                        <>
                            <NavLink
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/feed"
                            >
                                <i className="fas fa-stream"></i> <span className={styles.text}>Feed</span>
                            </NavLink>
                            <NavLink
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/liked"
                            >
                                <i className="fas fa-heart"></i> <span className={styles.text}>Liked</span>
                            </NavLink>
                            <NavLink
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/posts/create"
                            >
                                <i className="far fa-plus-square"></i> <span className={styles.text}>Create</span>
                            </NavLink>
                            <NavLink
                                className={styles.NavLink}
                                to={`/profiles/${currentUser?.profile_id}`}
                            >
                                <Avatar
                                    src={
                                        currentUser?.profile_image?.startsWith("http")
                                            ? currentUser.profile_image
                                            : "https://res.cloudinary.com/dctqmaht5/image/upload/v1752109202/default_profile_idzhze.jpg"
                                    }
                                    height={40}
                                />
                                <span className={styles.text}>Profile</span>
                            </NavLink>
                        </>
                    )}
                    {!currentUser && (
                        <>
                            <NavLink
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/signin"
                            >
                                <i className="fas fa-sign-in-alt"></i> Sign in
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                            >
                                <i className="fas fa-user-plus"></i> Sign up!
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
            {currentUser && (
                <NavLink
                    className={`${styles.NavLink} ${styles.LogoutLink}`}
                    to="/"
                    onClick={handleSignOut}
                >
                    <i className="fas fa-sign-out-alt"></i> <span className={styles.text}>Log Out</span>
                </NavLink>
            )}
        </div>
    );
};

export default NavBar;