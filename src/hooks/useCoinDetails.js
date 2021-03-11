import useAsyncFunction from './useAsyncFunction';
import { getCoinDetails } from '../api/coinGecko';
import { filterCoinDetails } from '../utils';

const defaultValue = {};

const useCoinDetails = (id) => {
  const [coinDetails, error, isPending] = useAsyncFunction(
    getCoinDetails,
    id,
    filterCoinDetails,
    defaultValue
  );

  return {
    coinDetails,
    error,
    isPending,
  };
};

export default useCoinDetails;
