import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';

export const filterGithubStatistics = (links, developerData) => {
  const { repos_url } = links;
  const { github } = repos_url;
  const githubUrl = github?.find((url) => !!url) ?? '';

  const {
    forks,
    stars,
    subscribers,
    total_issues: totalIssues,
  } = developerData;

  return {
    url: githubUrl,
    statistics: [
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
    ],
  };
};
