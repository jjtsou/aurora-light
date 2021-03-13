import styled from 'styled-components';

const StyledTypography = styled.span`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  margin-bottom: ${({ gutterBottom }) => gutterBottom}px;
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
`;

export default StyledTypography;
