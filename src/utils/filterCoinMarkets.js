export const filterCoinMarkets = (coins = []) =>
  coins.map(
    ({
      id,
      symbol,
      name,
      current_price: currentPrice,
      high_24h: highPrice24h,
      low_24h: lowPrice24h,
      price_change_percentage_24h: priceChangePercentage24h,
    }) => ({
      id,
      symbol,
      name,
      currentPrice,
      highPrice24h,
      lowPrice24h,
      priceChangePercentage24h,
    })
  );
