import styled from 'styled-components';

const JoinBody = styled.div`
  min-width: 250px;
  margin-left: auto;
  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-height: 320px;

  @media (max-width: 1300px) {
    display: none;
  }

  .join__heading {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: var(--black);
  }

  .join__text {
    margin-top: 10px;

    font-size: 14px;
    line-height: 19px;
    color: var(--gray);
  }

  .join__button {
    margin-top: 10px;
  }
`;

export default JoinBody;
