import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import SvgIcon from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import GithubStat from './githubStat';
import { StyledGithubStats, StyledGithubLink } from './GithubStats.styles';

const GithubStats = ({ url, statistics }) => {
  if (!url) return null;

  return (
    <StyledGithubStats>
      <StyledGithubLink href={url} target="_blank" rel="noreferrer">
        <SvgIcon component={GitHubIcon} />
      </StyledGithubLink>
      {statistics.map(({ name, value, component }) => (
        <GithubStat
          key={uuid()}
          name={name}
          value={value}
          component={component}
        />
      ))}
    </StyledGithubStats>
  );
};

GithubStats.propTypes = {
  url: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object),
};

GithubStats.defaultProps = {
  url: '',
  statistics: [],
};

export default GithubStats;
