import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

export const filterSocialMedia = (links, communityData) => {
  const {
    homepage,
    official_forum_url,
    subreddit_url: subredditUrl,
    twitter_screen_name,
  } = links;

  const homepageUrl = homepage.find((url) => !!url);
  const forumUrl = official_forum_url.find((url) => !!url);
  const twitterProfileUrl =
    twitter_screen_name && `https://twitter.com/${twitter_screen_name}`;

  const {
    twitter_followers: twitterFollowers,
    reddit_subscribers: redditSubscribers,
  } = communityData;

  return [
    {
      url: homepageUrl,
      icon: HomeOutlinedIcon,
    },
    {
      url: forumUrl,
      icon: ForumOutlinedIcon,
    },
    {
      url: twitterProfileUrl,
      icon: TwitterIcon,
      iconColor: 'dodgerBlue',
      followers: twitterFollowers,
    },
    {
      url: subredditUrl,
      icon: RedditIcon,
      iconColor: 'scarlet',
      followers: redditSubscribers,
    },
  ];
};
