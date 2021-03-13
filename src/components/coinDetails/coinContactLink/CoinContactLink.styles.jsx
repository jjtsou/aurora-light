import styled from 'styled-components';
import { StyledLink } from '../../common';

const StyledContactLink = styled(StyledLink)`
  color: ${({ color }) => color ?? 'black'};
  :hover,
  :active {
    color: ${({ actionColor }) => actionColor ?? 'grey'};
  }
`;

const StyledContactLinkWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledContactLink, StyledContactLinkWrapper };
