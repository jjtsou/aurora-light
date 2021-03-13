import PropTypes from 'prop-types';
import { useCoins } from '../../hooks';
import { Typography, Table, StyledTableCell } from '../common';
import Coin from './coin';
import { getTableHeaders } from '../../utils';

const Coins = ({ page }) => {
  const { coins, isPending } = useCoins(page);

  const headers = getTableHeaders().map((header, i) => {
    const alignment = i === 0 ? 'left' : 'center';
    return (
      <StyledTableCell key={header} align={alignment}>
        <Typography tag="span" fontSize={18} color="#333">
          {header}
        </Typography>
      </StyledTableCell>
    );
  });

  const rows = coins.map(
    ({
      id,
      symbol,
      name,
      currentPrice,
      highPrice24h,
      lowPrice24h,
      priceChangePercentage24h,
    }) => (
      <Coin
        key={id}
        id={id}
        symbol={symbol}
        name={name}
        currentPrice={currentPrice}
        highPrice24h={highPrice24h}
        lowPrice24h={lowPrice24h}
        priceChangePercentage24h={priceChangePercentage24h}
      />
    )
  );

  return <Table headers={headers} rows={rows} isPending={isPending} />;
};

Coins.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Coins;
