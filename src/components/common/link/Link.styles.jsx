import styled from 'styled-components';

const StyledLink = styled.a`
  outline: none;
  color: ${({ theme, color }) => theme.colors[color] ?? theme.colors.black};
  :hover,
  :active {
    color: ${({ theme, actionColor }) =>
      theme.colors[actionColor] ?? theme.colors.grey};
  }
`;

export { StyledLink };
