import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

const Header = () => (
    <div className={styles.header__container}>
      <div className={styles.logo__container}>
        <img src={logo} alt="logo" />
        <p>Agency</p>
      </div>
      <div className={styles.navigation}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="Blog">Blog</NavLink>
      </div>
      <a href='#contact' className={styles.btn__contact}>Contact</a>
    </div>
  )

export default Header