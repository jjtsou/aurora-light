import PropTypes from 'prop-types';
import Typography from '../typography';
import { StyledButtonList, StyledButton } from './ButtonList.styles';

const ButtonList = ({ list, clickHandler, variant, size, color }) => (
  <StyledButtonList>
    {list.map(({ name, value }) => (
      <StyledButton
        key={`${name}_changethis`}
        color={color}
        size={size}
        variant={variant}
        onClick={() => clickHandler(value)}
      >
        <Typography color="#505050">{name}</Typography>
      </StyledButton>
    ))}
  </StyledButtonList>
);

ButtonList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickHandler: PropTypes.func.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

ButtonList.defaultProps = {
  variant: 'text',
  size: 'medium',
  color: 'default',
};

export default ButtonList;
