export const filterMarketData = (marketData) => {
  const {
    current_price: { usd: currentPrice },
    high_24h: { usd: highPrice24h },
    low_24h: { usd: lowPrice24h },
    ath: { usd: highestPrice },
    ath_date: { usd: highestPriceDate },
    atl: { usd: lowestPrice },
    atl_date: { usd: lowestPriceDate },
  } = marketData;

  return [
    { label: 'Current Price', value: currentPrice },
    { label: 'High Price (24h)', value: highPrice24h },
    { label: 'Low Price (24h)', value: lowPrice24h },
    {
      label: 'Highest Price',
      value: highestPrice,
      date: new Date(highestPriceDate).toLocaleDateString(),
    },
    {
      label: 'Lowest Price',
      value: lowestPrice,
      date: new Date(lowestPriceDate).toLocaleDateString(),
    },
  ];
};
