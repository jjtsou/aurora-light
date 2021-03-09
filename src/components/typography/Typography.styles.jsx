import styled from 'styled-components';

const StyledTypography = styled.span`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
`;

export default StyledTypography;
