import React from 'react';
import Container from '../Container';
import CoverBody from './style';
import cover from '../../assets/images/cover/cover.jpg';

const Cover = () => (
  <CoverBody>
    <Container>
      <img src={cover} alt="Cover" className="cover__image" />
    </Container>
  </CoverBody>
);

export default Cover;
