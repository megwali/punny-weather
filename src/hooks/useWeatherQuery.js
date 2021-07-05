import { useEffect, useState } from 'react';
import { getDailySummary, groupByDate, sortByDate } from '../utils';

const url = process.env.REACT_APP_API_URL;
const APPID = process.env.REACT_APP_API_KEY;

const useWeatherQuery = ({ isLoading, params, skip }) => {
  const [data, setData] = useState({ city: null, error: false, loading: isLoading || false, list: [], summary: [] });
  const handleError = (error) => {
    const message = typeof error === 'object' ? error.message : error;
    setData(data => ({ ...data, error: message || true, loading: false }));
  };

  useEffect(() => {
    if (!skip) {
      setData(data => ({ ...data, error: false, loading: true }));

      fetch(`${url}?${params}&units=metric&APPID=${APPID}`)
      .then(response => response.json())
      .then(({ city, cod, list, message }) => {
        if (cod !== '200' && !list) {
          handleError({ message });
        } else {
          const summary = getDailySummary(list);
          setData({ error: false, city, loading: false, list: sortByDate(groupByDate(list)), summary });
        }
      })
      .catch(handleError);
    }
  }, [params, skip]);

  return { data, handleError };
};

export default useWeatherQuery;
