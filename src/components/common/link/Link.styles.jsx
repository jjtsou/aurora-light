import styled from 'styled-components';

const StyledLink = styled.a`
  outline: none;
  color: ${({ color }) => color ?? 'black'};
  :hover,
  :active {
    color: ${({ actionColor }) => actionColor ?? 'grey'};
  }
`;

export { StyledLink };
