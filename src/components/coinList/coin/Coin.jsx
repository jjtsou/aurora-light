import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Typography, StyledTableCell, StyledTableRow } from '../../common';
import { formatNumber } from '../../../utils';

const Coin = ({
  id,
  symbol,
  name,
  currentPrice,
  highPrice24h,
  lowPrice24h,
  priceChangePercentage24h,
}) => {
  const percentageColor =
    priceChangePercentage24h > 0 ? 'strongGreen' : 'amaranth';
  const history = useHistory();
  const handleNavigation = () => history.push(`details/${id}`);
  return (
    <StyledTableRow hover onClick={handleNavigation}>
      <StyledTableCell>
        <Typography tag="span" fontSize={16} color="darkCharcoal">
          {name}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography tag="span" fontSize={14} color="darkCharcoal">
          {symbol}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography tag="span" fontSize={14} color="darkCharcoal">
          {formatNumber(currentPrice)}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography tag="span" fontSize={14} color="darkCharcoal">
          {formatNumber(highPrice24h)}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography tag="span" fontSize={14} color="darkCharcoal">
          {formatNumber(lowPrice24h)}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography tag="span" fontSize={14} color={percentageColor}>
          {formatNumber(priceChangePercentage24h, 'percent')}
        </Typography>
      </StyledTableCell>
    </StyledTableRow>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  highPrice24h: PropTypes.number.isRequired,
  lowPrice24h: PropTypes.number.isRequired,
  priceChangePercentage24h: PropTypes.number.isRequired,
};

export default Coin;
