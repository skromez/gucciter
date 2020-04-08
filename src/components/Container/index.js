import React from 'react';
import ContainerBody from './style';

const Container = ({ children, size, padding }) => (
  <ContainerBody size={size} padding={padding}>
    {children}
  </ContainerBody>
);

export default Container;
