import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getCoins } from '../../api/coinGecko';
import { filterCoinMarkets } from '../../utils';
import Coin from '../coin';

const Coins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then((data) => {
      const filteredCoins = filterCoinMarkets(data);
      setCoins(filteredCoins);
    });
  }, []);

  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Current Price</th>
          <th>Highest Pr. (24h)</th>
          <th>Lowest Pr. (24h)</th>
          <th>Percentage Change (24h)</th>
        </tr>
      </thead>
      <tbody>
        {coins.map(
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
              symbol={symbol}
              name={name}
              currentPrice={currentPrice}
              highPrice24h={highPrice24h}
              lowPrice24h={lowPrice24h}
              priceChangePercentage24h={priceChangePercentage24h}
            />
          )
        )}
      </tbody>
    </Table>
  );
};

export default Coins;
