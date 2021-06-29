import { useEffect, useState } from 'react';

const url = process.env.REACT_APP_API_URL;
const APPID = process.env.REACT_APP_API_KEY;
const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
};

const useUserLocation = () => {
  const [position, setPosition] = useState([]);
  const [data, setData] = useState({ error: false, forecast: null, loading: true });
  const [latitude, longitude] = position;

  useEffect(() => {
    const handleError = () => {
      setData(data => ({ ...data, error: true, loading: false }));
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
        .then(forecast => {
          setData({ error: false, forecast, loading: false });
        })
        .catch(handleError);
      }
    };

    getForecastData();
  }, [latitude, longitude]);

  return data;
};

export default useUserLocation;
