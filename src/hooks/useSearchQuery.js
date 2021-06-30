import { useEffect, useState } from 'react';
import { getDailySummary } from '../utils';

const url = process.env.REACT_APP_API_URL;
const APPID = process.env.REACT_APP_API_KEY;


const useSearchQuery = (query) => {
  const [data, setData] = useState({ city: null, error: false, loading: true, list: [], summary: [] });

  useEffect(() => {
    const handleError = () => {
      setData(data => ({ ...data, error: true, loading: false }));
    };

    const getForecastData = () => {
      if (query) {
        setData(data => ({ ...data, error: false, loading: false }));

        fetch(`${url}?q=${query}&units=metric&APPID=${APPID}`)
        .then(response => response.json())
        .then(({ city, list }) => {
          const summary = getDailySummary(list);
          setData({ error: false, city, loading: false, list, summary });
        })
        .catch(handleError);
      }
    };

    getForecastData();
  }, [query]);

  return data;
};

export default useSearchQuery;
