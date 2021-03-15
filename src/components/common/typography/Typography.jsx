import PropTypes from 'prop-types';
import StyledTypography from './Typography.styles';

const Typography = ({
  children,
  tag,
  color,
  fontSize,
  fontFamily,
  gutterBottom,
  width,
  padding,
}) => (
  <StyledTypography
    as={tag}
    fontSize={fontSize}
    color={color}
    gutterBottom={gutterBottom}
    fontFamily={fontFamily}
    width={width}
    padding={padding}
  >
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  gutterBottom: PropTypes.number,
  width: PropTypes.string,
  padding: PropTypes.string,
};

Typography.defaultProps = {
  tag: 'span',
  color: '',
  fontSize: 14,
  fontFamily: 'Roboto',
  gutterBottom: 0,
  width: 'auto',
  padding: '0',
};

export default Typography;
