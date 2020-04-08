import styled from 'styled-components';

const IndexBody = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  
  .left {
    width: 50%;    
    padding: 50px;

    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--blue);
    color: #ffffff;
    
    font-size: 72px;
    font-weight: 700;
    line-height: 84px;
    
    @media (max-width: 1100px) {
      font-size: 52px;
    }
    
    @media (max-width: 850px) {
      display: none;
    }
  }
  
  .left__wrapper {
    text-align: center;
  }
  
  .right {
    width: 50%;
    background-color: #ffffff;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 850px) {
      width: 100%;
    }
  }
  
  .right__wrapper {
    min-width: 230px;
    
    h1 {
     display: none;
    }
  }
`

export default IndexBody;
