import PropTypes from 'prop-types';
import ShowMore from 'react-show-more';
import Typography from '../typography';
import { StyledCoinDescription, StyledCoinSummary } from './CoinDetails.styles';

const CoinDescription = ({ description, image, name }) => (
  <StyledCoinDescription>
    {image && <img src={image} alt={name} width="80px" height="80px" />}
    {description && (
      <StyledCoinSummary>
        <Typography tag="h4" color="#505050" fontSize={20} gutterBottom={15}>
          Summary
        </Typography>
        <Typography width="50vw" color="#505050">
          <ShowMore lines={10} more="Read more" less="Show less">
            {description}
          </ShowMore>
        </Typography>
      </StyledCoinSummary>
    )}
  </StyledCoinDescription>
);

CoinDescription.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

CoinDescription.defaultProps = {
  description: '',
  image: '',
  name: '',
};

export default CoinDescription;
