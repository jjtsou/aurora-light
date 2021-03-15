import PropTypes from 'prop-types';
import { StyledLink } from './Link.styles';

const Link = ({ href, children, color, actionColor }) => {
  if (!href) return null;
  return (
    <StyledLink
      href={href}
      color={color}
      actionColor={actionColor}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
  actionColor: PropTypes.string,
};

Link.defaultProps = {
  color: '',
  actionColor: '',
};

export default Link;
