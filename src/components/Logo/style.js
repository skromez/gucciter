import styled from 'styled-components';

export const LogoBody = styled.div`
  display: flex;
  align-items: center;
  
  .logo__icon {
    max-width: 49px;
    max-height: 49px;
  }

  .logo__text {
    margin-left: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: var(--blue);

    @media (max-width: 540px) {
      display: none;
    }
  }
`;

export default LogoBody;
