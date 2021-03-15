import styled from 'styled-components';

const StyledTypography = styled.span`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme, color }) => theme.colors[color] ?? theme.colors.black};
  margin-bottom: ${({ gutterBottom }) => gutterBottom}px;
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
`;

export default StyledTypography;
