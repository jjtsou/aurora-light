import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { Typography } from '../../common';
import CoinMarket from '../coinMarket';
import {
  StyledCoinMarkets,
  StyledMarketStatistics,
  StyledMarketPriceChange,
} from './CoinMarkets.styles';

const CoinMarkets = ({ markets, priceChange }) => (
  <StyledCoinMarkets>
    <Typography color="#505050" tag="h4" fontSize={20}>
      Market Statistics
    </Typography>
    <StyledMarketStatistics>
      {markets.map(({ value, label, date }) => (
        <CoinMarket key={uuid()} price={value} date={date} label={label} />
      ))}
    </StyledMarketStatistics>
    <Typography color="#505050" tag="h4" fontSize={20}>
      Price Change
    </Typography>
    <StyledMarketPriceChange>
      {priceChange.map(({ price, period }) => (
        <CoinMarket key={uuid()} price={price} label={period} form="percent" />
      ))}
    </StyledMarketPriceChange>
  </StyledCoinMarkets>
);

CoinMarkets.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object),
  priceChange: PropTypes.arrayOf(PropTypes.object),
};

CoinMarkets.defaultProps = {
  markets: [],
  priceChange: [],
};

export default CoinMarkets;
