import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import SvgIcon from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import GithubStat from './githubStat';
import { StyledGithubStats, StyledGithubLink } from './GithubStats.styles';

const GithubStats = ({ githubUrl, statistics }) => {
  if (!githubUrl) return null;

  return (
    <StyledGithubStats>
      <StyledGithubLink href={githubUrl} target="_blank" rel="noreferrer">
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
  githubUrl: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object),
};

GithubStats.defaultProps = {
  githubUrl: '',
  statistics: [],
};

export default GithubStats;
