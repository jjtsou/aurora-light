const filterPriceData = (prices) =>
  prices.map((price) => ({ x: price[0], y: price[1].toFixed(2) }));

export const filterChartData = (data) => {
  const [oneDay, fourteenDays, oneMonth, threeMonths, oneYear, max] = data;

  const filteredChartData = {
    1: filterPriceData(oneDay.data.prices),
    14: filterPriceData(fourteenDays.data.prices),
    30: filterPriceData(oneMonth.data.prices),
    90: filterPriceData(threeMonths.data.prices),
    365: filterPriceData(oneYear.data.prices),
    max: filterPriceData(max.data.prices),
  };

  return filteredChartData;
};
