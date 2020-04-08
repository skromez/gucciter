import styled, { css } from 'styled-components';

const unfilled = css`
  background: var(--white);
  color: var(--blue);
  &:hover {
    transition: 0.2s;
    background: var(--blue);
    color: var(--white);
  }
`;

const filled = css`
  background: var(--blue);
  color: var(--white);

  &:hover {
    transition: 0.2s;
    background: var(--white);
    color: var(--blue);
  }
`;

const Button = styled.button`
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
  border: none;
  border-radius: 100px;
  padding: 10px 30px;
  min-width: ${(props) => {
    switch (props.size) {
      case props.size:
        return `${props.size}`;
      default:
        return '';
    }
  }};

  ${(props) => {
    switch (props.filled) {
      case 'false':
        return unfilled;
      case 'true':
        return filled;
      default:
        return '';
    }
  }};
`;

export default Button;
