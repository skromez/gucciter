import styled from 'styled-components';

const LikeBody = styled.button`
  margin-top: 15px;

  display: flex;
  background: transparent;
  border: none;

  .like__text {
    margin-left: 5px;

    font-size: 12px;
    line-height: 17px;

    color: var(--gray);
  }
`;

export default LikeBody;
