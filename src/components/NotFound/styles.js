import styled from 'styled-components';

const NotFoundBody = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--blue);
  text-align: center;
    
  .not-found__title {
    position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    font-size: 72px;
    font-weight: 700;
    line-height: 84px;
    
    color: #ffffff;
  }
`;


export default NotFoundBody;
