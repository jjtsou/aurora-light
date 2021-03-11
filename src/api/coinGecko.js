import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: { Accept: 'application/json' },
});

const endpoints = {
  coins_markets: '/coins/markets',
  coin_market_chart: (id) => `/coins/${id}/market_chart`,
  coin_details: (id) => `/coins/${id}`,
};

export const getCoins = (page) =>
  api.get(endpoints.coins_markets, {
    params: {
      vs_currency: 'usd',
      per_page: 12,
      page,
    },
  });

export const getChartData = (id, days) =>
  api.get(endpoints.coin_market_chart(id), {
    params: {
      id,
      vs_currency: 'usd',
      days,
    },
  });

export const getCoinDetails = (id) =>
  api.get(endpoints.coin_details(id), {
    params: {
      id,
      localization: 'false',
      tickers: false,
    },
  });
