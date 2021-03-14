import styled from 'styled-components';
import { StyledLink } from '../../common';

const StyledContactLink = styled(StyledLink)`
  color: ${({ color }) => color ?? 'black'};
  padding: 0 8px;

  :hover,
  :active {
    color: ${({ actionColor }) => actionColor ?? 'grey'};
  }
`;

const StyledContactLinkWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

export { StyledContactLink, StyledContactLinkWrapper };
