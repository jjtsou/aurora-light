import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: { Accept: 'application/json' },
});

const endpoints = {
  coins_markets: '/coins/markets',
};

export const getCoins = () =>
  api
    .get(endpoints.coins_markets, {
      params: {
        vs_currency: 'usd',
        per_page: 10,
        page: 1,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
