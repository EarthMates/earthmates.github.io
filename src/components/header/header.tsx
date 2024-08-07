import classNames from "classnames";
import styles from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../button/button";
import Logo from "../../assets/landing_page/logo.svg";
import Button_module from "../button/button.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";

export interface HeaderProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling of the page when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling of the page when the menu is closed
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickLogo = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.logo}>
        <Link to="/" onClick={handleClickLogo}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      {isMobile ? (
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      ) : (
        <div className={styles.menu}>
          <NavLink
            to="/startups"
            className={({ isActive }) =>
              classNames({ [styles.active]: isActive })
            }
          >
            For Startups
          </NavLink>

          <NavLink
            to="/investors"
            className={({ isActive }) =>
              classNames({ [styles.active]: isActive })
            }
          >
            For Investors
          </NavLink>
        </div>
      )}
      <div className={styles.login}>
        <a href="/maintenance" className={styles["login-button"]}>
          Login
        </a>
        <Button buttonText="Get Started" />
      </div>

      {isMobile && isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <NavLink
            to="/startups"
            className={({ isActive }) =>
              classNames({ [styles.active]: isActive })
            }
          >
            For Startups
          </NavLink>

          <NavLink
            to="/investors"
            className={({ isActive }) =>
              classNames({ [styles.active]: isActive })
            }
          >
            For Investors
          </NavLink>

          <hr />
          <a href="/maintenance" className={styles["login-button"]}>
            Login
          </a>
          <Button buttonText="Get Started" />
        </div>
      )}
    </div>
  );
};
