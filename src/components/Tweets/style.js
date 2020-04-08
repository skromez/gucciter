import styled from 'styled-components';

const TweetsBody = styled.div`
  position: absolute;
  top: -66px;

  @media (max-width: 850px) {
    display: flex;
    width: 100%;
    background: var(--white);
    top: -64px;
    border-top: 2px solid var(--bg);
  }

  .tweets__radio {
    display: none;

    &:checked + .tweets__label {
      border-bottom: 2px solid var(--blue);
    }
  }

  .tweets__label {
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .label__tweets {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.024em;
    color: var(--gray);
  }

  .label__amount {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: var(--blue);
  }
`;

export default TweetsBody;
