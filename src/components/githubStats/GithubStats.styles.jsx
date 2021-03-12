import styled from 'styled-components';

const StyledGithubStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledGithubLink = styled.a`
  outline: none;
  color: black;
  padding-right: 2px;
  margin-top: 3px;
  :hover,
  :active {
    color: gray;
  }
`;

export { StyledGithubStats, StyledGithubLink };
