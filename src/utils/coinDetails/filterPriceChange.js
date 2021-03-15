export const filterPriceChange = (marketData) => {
  const {
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_14d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_200d,
    price_change_percentage_1y,
  } = marketData;

  return [
    {
      period: '1 day',
      price: price_change_percentage_24h,
    },
    {
      period: '7 days',
      price: price_change_percentage_7d,
    },
    {
      period: '14 days',
      price: price_change_percentage_14d,
    },
    {
      period: '30 days',
      price: price_change_percentage_30d,
    },
    {
      period: '60 days',
      price: price_change_percentage_60d,
    },
    {
      period: '200 days',
      price: price_change_percentage_200d,
    },

    {
      period: '1 year',
      price: price_change_percentage_1y,
    },
  ];
};
