import styled, { css } from 'styled-components';

const columnBig = css`
  flex-direction: column;

  .user__name {
    font-size: 25px;
    font-weight: 700;
    line-height: 33px;
    color: var(--black);
  }

  .user__link {
    font-size: 12px;
  }
`;

const column = css`
  flex-direction: column;

  .user__name {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
`;

const row = css`
  flex-direction: row;

  .user__name {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    margin-right: 15px;

    color: var(--black);
  }
`;

const UserBody = styled.div`
  display: flex;

  ${(props) => {
    switch (props.direction) {
      case 'columnBig':
        return columnBig;
      case 'column':
        return column;
      case 'row':
        return row;
      default:
        return '';
    }
  }}

  .user__link {
    text-decoration: none;
    font-size: 14px;
    line-height: 19px;
    color: var(--gray);
  }
`;

export default UserBody;
