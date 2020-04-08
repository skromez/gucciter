import React from 'react';
import IndexBody from './style';
import SignUp from '../SignUp';

const Index = () => (
  <IndexBody className="index">
    <div className="index__left left">
      <div className="left__wrapper">
        <h1>
          Share thoughts
          <br />
          no one cares about
        </h1>
      </div>
    </div>
    <div className="index__right right">
      <div className="right__wrapper">
        <SignUp />
      </div>
    </div>
  </IndexBody>
);

export default Index;
