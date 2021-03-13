import styled from 'styled-components';
import { StyledLink } from '../link';

const StyledGithubStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledGithubLink = styled(StyledLink)`
  padding-right: 2px;
  margin-top: 3px;
`;

export { StyledGithubStats, StyledGithubLink };
