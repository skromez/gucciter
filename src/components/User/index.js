/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import UserBody from './style';

const User = ({ name, nick, direction, className }) => (
  <UserBody className={className} direction={direction}>
    <h3 className="user__name">{name}</h3>
    <a href="#" className="user__link">
      {`@${nick}`}
    </a>
  </UserBody>
);

export default User;
