import styled from 'styled-components';

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledContactLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-width: 20vw;
  @media only screen and (max-width: 1200px) {
    width: 30vw;
  }
  @media only screen and (max-width: 850px) {
    width: 40vw;
  }
  @media only screen and (max-width: 600px) {
    width: 70vw;
  }
`;

export { StyledContactInfo, StyledContactLinkWrapper };
