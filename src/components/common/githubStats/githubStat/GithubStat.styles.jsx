import styled from 'styled-components';

const StyledGithubStat = styled.div`
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  padding: 4px 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  min-width: 6vw;
  margin: 10px;
`;

const StyledGithubIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 3px;
`;

export { StyledGithubStat, StyledGithubIconWrapper };
