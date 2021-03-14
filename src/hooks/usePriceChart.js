import { useCallback, useMemo } from 'react';
import useAsyncFunction from './useAsyncFunction';
import { getChartData } from '../api/coinGecko';
import { filterChartData, getChartTimePeriod } from '../utils';

const defaultValue = {};

const usePriceChart = (id) => {
  const promises = useMemo(
    () => getChartTimePeriod().map(({ value }) => getChartData(id, value)),
    [id]
  );
  const asyncFunction = useCallback(() => Promise.all(promises), [promises]);

  const [chartData, error, isPending] = useAsyncFunction(
    asyncFunction,
    id,
    filterChartData,
    defaultValue
  );

  return {
    chartData,
    error,
    isPending,
  };
};

export default usePriceChart;
