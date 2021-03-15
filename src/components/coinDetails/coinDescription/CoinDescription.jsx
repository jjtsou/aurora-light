import PropTypes from 'prop-types';
import ShowMore from 'react-show-more';
import { Typography } from '../../common';
import { StyledCoinDescription } from './CoinDescription.styles';

const CoinDescription = ({ description }) =>
  description ? (
    <StyledCoinDescription>
      <Typography tag="h4" color="matterhorn" fontSize={20} gutterBottom={15}>
        Summary
      </Typography>
      <Typography width="50vw" color="matterhorn">
        <ShowMore lines={10} more="Read more" less="Show less">
          {description}
        </ShowMore>
      </Typography>
    </StyledCoinDescription>
  ) : null;

CoinDescription.propTypes = {
  description: PropTypes.string,
};

CoinDescription.defaultProps = {
  description: '',
};

export default CoinDescription;
