import PropTypes from 'prop-types';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import { Typography } from '../../common';
import {
  StyledContactInfo,
  StyledContactLinkWrapper,
} from './CoinContactInfo.styles';
import CoinContactLink from '../coinContactLink';

const CoinContactInfo = ({ links, socialMedia }) => {
  const { homepageUrl, forumUrl } = links;
  const {
    twitterProfileUrl,
    subredditUrl,
    twitterFollowers,
    redditSubscribers,
  } = socialMedia;
  return (
    <StyledContactInfo>
      <Typography color="#505050" tag="h4" fontSize={16} gutterBottom={15}>
        Social
      </Typography>
      <StyledContactLinkWrapper>
        <CoinContactLink url={homepageUrl} icon={HomeOutlinedIcon} />
        <CoinContactLink url={forumUrl} icon={ForumOutlinedIcon} />
        <CoinContactLink
          url={twitterProfileUrl}
          icon={TwitterIcon}
          followers={twitterFollowers}
          color="#1d9bf0"
        />
        <CoinContactLink
          url={subredditUrl}
          icon={RedditIcon}
          followers={redditSubscribers}
          color="#ff3300"
        />
      </StyledContactLinkWrapper>
    </StyledContactInfo>
  );
};

CoinContactInfo.propTypes = {
  links: PropTypes.objectOf(PropTypes.string),
  socialMedia: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

CoinContactInfo.defaultProps = {
  links: {},
  socialMedia: {},
};

export default CoinContactInfo;
