import PropTypes from 'prop-types';
import { Typography } from '../../common';
import { StyledCoinMarket, StyledMarketWithDate } from './CoinMarket.styles';
import { formatNumber } from '../../../utils';

const CoinMarket = ({ price, label, date, color, form }) => {
  if (!price) return null;

  const formattedPrice = formatNumber(price, form);
  const indicationColor = price > 0 ? 'strongGreen' : 'amaranth';
  const priceColor = form === 'percent' ? indicationColor : '';

  return date ? (
    <StyledCoinMarket>
      <Typography color={color} fontSize={16}>
        {label}
      </Typography>
      <StyledMarketWithDate>
        <Typography color={priceColor} gutterBottom={5}>
          {formattedPrice}
        </Typography>
        <Typography color="grey">{date}</Typography>
      </StyledMarketWithDate>
    </StyledCoinMarket>
  ) : (
    <StyledCoinMarket>
      <Typography color={color} fontSize={16}>
        {label}
      </Typography>
      <Typography color={priceColor}>{formattedPrice}</Typography>
    </StyledCoinMarket>
  );
};

CoinMarket.propTypes = {
  price: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  date: PropTypes.string,
  color: PropTypes.string,
  form: PropTypes.string,
};

CoinMarket.defaultProps = {
  date: '',
  color: 'matterhorn',
  form: 'currency',
};

export default CoinMarket;
