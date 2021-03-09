import PropTypes from 'prop-types';
import StyledTypography from './Typography.styles';

const Typography = ({ children, tag, color, fontSize }) => (
  <StyledTypography as={tag} fontSize={fontSize} color={color}>
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

Typography.defaultProps = {
  tag: 'span',
  color: 'black',
  fontSize: 14,
};

export default Typography;
