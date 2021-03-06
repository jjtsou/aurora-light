import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { useCoins } from '../../hooks';
import { Typography, Table, StyledTableCell } from '../common';
import Coin from './coin';
import { CoinListSkeleton } from './CoinList.styles';
import { getTableHeaders } from '../../utils';

const CoinList = ({ page }) => {
  const { coins, isPending } = useCoins(page);

  const headers = getTableHeaders().map((header, i) => {
    const alignment = i === 0 ? 'left' : 'center';
    return (
      <StyledTableCell key={uuid()} align={alignment}>
        <Typography tag="span" fontSize={18} color="darkCharcoal">
          {header}
        </Typography>
      </StyledTableCell>
    );
  });

  const rows = isPending ? (
    <CoinListSkeleton />
  ) : (
    coins.map(
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
          key={uuid()}
          id={id}
          symbol={symbol}
          name={name}
          currentPrice={currentPrice}
          highPrice24h={highPrice24h}
          lowPrice24h={lowPrice24h}
          priceChangePercentage24h={priceChangePercentage24h}
        />
      )
    )
  );

  return <Table headers={headers} rows={rows} />;
};

CoinList.propTypes = {
  page: PropTypes.number.isRequired,
};

export default CoinList;
