import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.snow};
  overflow: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { StyledApp, StyledLink };
