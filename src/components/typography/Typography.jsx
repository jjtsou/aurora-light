import PropTypes from 'prop-types';
import StyledTypography from './Typography.styles';

const Typography = ({ children, tag, color, fontSize, gutterBottom }) => (
  <StyledTypography
    as={tag}
    fontSize={fontSize}
    color={color}
    gutterBottom={gutterBottom}
  >
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  gutterBottom: PropTypes.number,
};

Typography.defaultProps = {
  tag: 'span',
  color: 'black',
  fontSize: 14,
  gutterBottom: 0,
};

export default Typography;
