import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '../typography';
import { getCoins } from '../../api/coinGecko';
import { filterCoinMarkets, getTableHeaders } from '../../utils';
import { Table, StyledTableCell } from '../table';
import Coin from '../coin';

const Coins = ({ page }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins(page).then((data) => {
      const filteredCoins = filterCoinMarkets(data);
      setCoins(filteredCoins);
    });
  }, [page]);

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

  return <Table headers={headers} rows={rows} />;
};

Coins.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Coins;