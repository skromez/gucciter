import styled from 'styled-components';

const ContainerBody = styled.div`
  max-width: ${(props) => {
    switch (props.size) {
      case 'normal':
        return '1335px';
      case 'narrow':
        return '670px';
      default:
        return '100%';
    }
  }};

  padding: ${(props) => {
    switch (props.padding) {
      case 'normal':
        return '5px 30px';
      default:
        return '0';
    }
  }};

  margin: 0 auto;
`;

export default ContainerBody;
