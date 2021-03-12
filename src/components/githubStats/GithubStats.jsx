import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import GithubStat from './githubStat';
import { StyledGithubStats, StyledGithubLink } from './GithubStats.styles';

const GithubStats = ({ githubUrl, forks, stars, subscribers, totalIssues }) => {
  if (!githubUrl) return null;

  const statistics = [
    {
      name: 'Subscribers',
      value: subscribers,
      component: NotificationsOutlinedIcon,
    },
    {
      name: 'Forks',
      value: forks,
      component: RestaurantIcon,
    },
    {
      name: 'Issues',
      value: totalIssues,
      component: BugReportOutlinedIcon,
    },
    {
      name: 'Stars',
      value: stars,
      component: StarBorderOutlinedIcon,
    },
  ];

  return (
    <StyledGithubStats>
      <StyledGithubLink href={githubUrl} target="_blank" rel="noreferrer">
        <SvgIcon component={GitHubIcon} />
      </StyledGithubLink>
      {statistics.map(({ name, value, component }) => (
        <GithubStat
          key={`${value}changethis`}
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
  forks: PropTypes.number,
  stars: PropTypes.number,
  subscribers: PropTypes.number,
  totalIssues: PropTypes.number,
};

GithubStats.defaultProps = {
  githubUrl: '',
  forks: 0,
  stars: 0,
  subscribers: 0,
  totalIssues: 0,
};

export default GithubStats;
