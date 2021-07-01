import { useEffect, useState } from 'react';
import { getDailySummary, groupByDate, sortByDate } from '../utils';

const url = process.env.REACT_APP_API_URL;
const APPID = process.env.REACT_APP_API_KEY;
const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
};

const useUserLocation = (skip) => {
  const [position, setPosition] = useState([]);
  const [data, setData] = useState({ city: null, error: false, loading: true, list: [], summary: [] });
  const [latitude, longitude] = position;

  useEffect(() => {
    const handleError = (message) => {
      setData(data => ({ ...data, error: message || true, loading: false }));
    };

    const handleSuccess = position => {
      const { latitude, longitude } = position.coords || {};
      setPosition([latitude, longitude]);
    };

    const getForecastData = () => {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

      if (latitude && longitude) {
        fetch(`${url}?lat=${latitude}&lon=${longitude}&units=metric&APPID=${APPID}`)
        .then(response => response.json())
        .then(({ city, cod, list, message }) => {
          if (cod !== '200' && !list) {
            handleError(message);
          } else {
            const summary = getDailySummary(list);
            setData({ error: false, city, loading: false, list: sortByDate(groupByDate(list)), summary });
          }
        })
        .catch(handleError);
      }
    };

    if (!skip) {
      getForecastData();
    }
  }, [latitude, longitude, skip]);

  return data;
};

export default useUserLocation;
