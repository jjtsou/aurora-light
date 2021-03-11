import useAsyncFunction from './useAsyncFunction';
import { getCoins } from '../api/coinGecko';
import { filterCoinMarkets } from '../utils';

const defaultValue = [];

const useCoins = (page) => {
  const [coins, error, isPending] = useAsyncFunction(
    getCoins,
    page,
    filterCoinMarkets,
    defaultValue
  );

  return {
    coins,
    error,
    isPending,
  };
};

export default useCoins;
