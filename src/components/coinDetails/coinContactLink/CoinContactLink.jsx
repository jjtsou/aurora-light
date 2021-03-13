import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  StyledContactLink,
  StyledContactLinkWrapper,
} from './CoinContactLink.styles';
import { Typography } from '../../common';
import { kFormatter } from '../../../utils';

const CoinContactLink = ({ icon, url, followers, color }) => {
  if (!url) return null;

  return followers ? (
    <StyledContactLinkWrapper>
      <StyledContactLink
        href={url}
        color={color}
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon fontSize="large" component={icon} />
      </StyledContactLink>
      <Typography>{kFormatter(followers)}</Typography>
    </StyledContactLinkWrapper>
  ) : (
    <StyledContactLink
      href={url}
      color={color}
      target="_blank"
      rel="noreferrer"
    >
      <SvgIcon fontSize="large" component={icon} />
    </StyledContactLink>
  );
};

CoinContactLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  url: PropTypes.string,
  followers: PropTypes.number,
  color: PropTypes.string,
};

CoinContactLink.defaultProps = {
  url: '',
  followers: null,
  color: 'black',
};

export default CoinContactLink;
