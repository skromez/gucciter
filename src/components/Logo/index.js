import React from 'react';
import logo from '../../assets/images/header/logo.svg';
import LogoBody from './style';

const Logo = () => (
  <LogoBody className="logo">
    <img src={logo} alt="logo" className="logo__icon" />
    <p className="logo__text">Guccitter</p>
  </LogoBody>
);

export default Logo;
