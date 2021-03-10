import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: { Accept: 'application/json' },
});

const endpoints = {
  coins_markets: '/coins/markets',
};

export const getCoins = (page) =>
  api
    .get(endpoints.coins_markets, {
      params: {
        vs_currency: 'usd',
        per_page: 12,
        page,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
