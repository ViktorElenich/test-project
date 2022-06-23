import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  const { headerContainer, logoContainer, navigation, btnContact, wrapper } = styles;
  return (
    <div className={headerContainer}>
      <div className={wrapper}>
        <div className={logoContainer}>
          <img src={logo} alt="logo" />
          <p>Agency</p>
        </div>
        <div className={navigation}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="Blog">Blog</NavLink>
        </div>
        <a href='#contact' className={btnContact}>Contact</a>
      </div>
    </div>
  )
}

export default Header