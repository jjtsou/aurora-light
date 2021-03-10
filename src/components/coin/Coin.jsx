import PropTypes from 'prop-types';
import Typography from '../typography';
import { StyledTableCell, StyledTableRow } from '../table';

const Coin = ({
  id,
  symbol,
  name,
  currentPrice,
  highPrice24h,
  lowPrice24h,
  priceChangePercentage24h,
}) => (
  <StyledTableRow hover onClick={() => console.log(id)}>
    <StyledTableCell>
      <Typography tag="span" fontSize={16} color="#333">
        {name}
      </Typography>
    </StyledTableCell>
    <StyledTableCell align="center">
      <Typography tag="span" fontSize={14} color="#333">
        {symbol}
      </Typography>
    </StyledTableCell>
    <StyledTableCell align="center">
      <Typography tag="span" fontSize={14} color="#333">
        {currentPrice}
      </Typography>
    </StyledTableCell>
    <StyledTableCell align="center">
      <Typography tag="span" fontSize={14} color="#333">
        {highPrice24h}
      </Typography>
    </StyledTableCell>
    <StyledTableCell align="center">
      <Typography tag="span" fontSize={14} color="#333">
        {lowPrice24h}
      </Typography>
    </StyledTableCell>
    <StyledTableCell align="center">
      <Typography tag="span" fontSize={14}>
        {priceChangePercentage24h}
      </Typography>
    </StyledTableCell>
  </StyledTableRow>
);

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
