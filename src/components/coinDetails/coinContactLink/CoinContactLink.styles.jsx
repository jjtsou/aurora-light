import styled from 'styled-components';
import { StyledLink } from '../../common';

const StyledContactLink = styled(StyledLink)`
  color: ${({ theme, color }) => theme.colors[color] ?? theme.colors.black};
  padding: 0 8px;

  :hover,
  :active {
    color: ${({ theme, actionColor }) =>
      theme.colors[actionColor] ?? theme.colors.grey};
  }
`;

const StyledContactLinkWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

export { StyledContactLink, StyledContactLinkWrapper };
