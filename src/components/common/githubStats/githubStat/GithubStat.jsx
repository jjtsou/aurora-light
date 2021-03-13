import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { StyledGithubStat, StyledGithubIconWrapper } from './GithubStat.styles';
import Typography from '../../typography';
import { kFormatter } from '../../../../utils';

const GithubStat = ({ name, value, component }) => {
  if (!value) return null;
  const kFormattedValue = kFormatter(value);

  return (
    <StyledGithubStat>
      <StyledGithubIconWrapper>
        <SvgIcon fontSize="small" component={component} />
        <Typography padding="0 0 0 2px" fontSize={13}>
          {name}
        </Typography>
      </StyledGithubIconWrapper>
      <Typography fontSize={13}>{kFormattedValue}</Typography>
    </StyledGithubStat>
  );
};

GithubStat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default GithubStat;
