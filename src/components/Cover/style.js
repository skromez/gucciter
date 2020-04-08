import styled from 'styled-components';

const CoverBody = styled.section`
  padding-bottom: 60px;
  background: var(--white);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);

  @media (max-width: 850px) {
    padding-bottom: 0;
  }

  .cover__image {
    width: 100%;
    object-fit: cover;
  }
`;

export default CoverBody;
