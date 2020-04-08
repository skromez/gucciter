import styled from 'styled-components';

const ProfileBody = styled.section`
  width: 210px;
  max-height: 347px;
  position: relative;
  top: -180px;
  margin-right: 93px;

  @media (max-width: 1100px) {
    margin-right: 10px;
    top: -135px;
  }

  @media (max-width: 850px) {
    margin-right: 0;
    top: 4px;
    align-self: flex-start;
    margin-left: 36px;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    display: flex;
    align-self: flex-end;
    width: 100%;
    align-items: flex-end;
  }

  .profile__avatar {
    margin-bottom: 20px;
  }

  .profile__user {
    margin-bottom: 30px;
  }
`;

export default ProfileBody;
