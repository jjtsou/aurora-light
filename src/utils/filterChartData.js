export const filterChartData = (data) => {
  const [oneDay, fourteenDays, oneMonth, threeMonths, oneYear, max] = data;
  return {
    1: oneDay.data.prices,
    14: fourteenDays.data.prices,
    30: oneMonth.data.prices,
    90: threeMonths.data.prices,
    365: oneYear.data.prices,
    max: max.data.prices,
  };
};
