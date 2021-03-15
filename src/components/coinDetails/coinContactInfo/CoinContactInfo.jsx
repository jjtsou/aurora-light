import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { Typography } from '../../common';
import {
  StyledContactInfo,
  StyledContactLinkWrapper,
} from './CoinContactInfo.styles';
import CoinContactLink from '../coinContactLink';

const CoinContactInfo = ({ socialMedia }) => (
  <StyledContactInfo>
    <Typography color="matterhorn" tag="h4" fontSize={16} gutterBottom={15}>
      Social
    </Typography>
    <StyledContactLinkWrapper>
      {socialMedia.map(({ url, icon, iconColor, followers }) => (
        <CoinContactLink
          key={uuid()}
          url={url}
          icon={icon}
          color={iconColor}
          followers={followers}
        />
      ))}
    </StyledContactLinkWrapper>
  </StyledContactInfo>
);

CoinContactInfo.propTypes = {
  socialMedia: PropTypes.arrayOf(PropTypes.object),
};

CoinContactInfo.defaultProps = {
  socialMedia: [],
};

export default CoinContactInfo;
