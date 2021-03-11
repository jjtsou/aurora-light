import { useCallback, useMemo } from 'react';
import useAsyncFunction from './useAsyncFunction';
import { getChartData } from '../api/coinGecko';
import { filterChartData, getChartDuration } from '../utils';

const defaultValue = {};

const usePriceChart = (id) => {
  const promises = useMemo(
    () => getChartDuration().map((days) => getChartData(id, days)),
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
