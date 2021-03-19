import { useEffect, useState, useCallback } from 'react';

const useAsyncFunction = (
  asyncFunction,
  dependency,
  filterFunction,
  defaultValue
) => {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const executeCall = useCallback(() => {
    setIsPending(true);
    asyncFunction(dependency)
      .then((response) => {
        const filteredData = filterFunction(response);
        setData(filteredData);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setIsPending(false));
  }, [asyncFunction, filterFunction, dependency]);

  useEffect(() => {
    executeCall();
  }, [executeCall]);

  return [data, error, isPending];
};

export default useAsyncFunction;
