import { useEffect, useState } from 'react';

const url = process.env.REACT_APP_API_URL;
const APPID = process.env.REACT_APP_API_KEY;


const useSearchQuery = (query) => {
  const [data, setData] = useState({ error: false, forecast: null, loading: false });

  useEffect(() => {
    const handleError = () => {
      setData(data => ({ ...data, error: true, loading: false }));
    };

    const getForecastData = () => {
      if (query) {
        setData(data => ({ ...data, error: false, loading: false }));

        fetch(`${url}?q=${query}&units=metric&APPID=${APPID}`)
        .then(response => response.json())
        .then(forecast => {
          setData({ error: false, forecast, loading: false });
        })
        .catch(handleError);
      }
    };

    getForecastData();
  }, [query]);

  return data;
};

export default useSearchQuery;
