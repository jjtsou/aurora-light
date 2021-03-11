import { useEffect, useState } from 'react';

const useAsyncFunction = (
  asyncFunction,
  dependency,
  filterFunction,
  defaultValue
) => {
  const [state, setState] = useState({
    value: defaultValue,
    error: null,
    isPending: true,
  });
  useEffect(() => {
    asyncFunction(dependency)
      .then((response) => {
        const filteredData = filterFunction(response);
        setState({ value: filteredData, error: null, isPending: false });
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          error: null,
          isPending: false,
        }));
        console.error(error);
      });
  }, [asyncFunction, filterFunction, dependency]);

  const { value, error, isPending } = state;

  return [value, error, isPending];
};

export default useAsyncFunction;
