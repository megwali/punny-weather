import { useEffect, useState } from 'react';

const url = process.env.REACT_APP_API_URL;
const APPID = process.env.REACT_APP_API_KEY;
const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
};

const useUserLocation = () => {
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState([]);
  const [data, setData] = useState([]);
  const [latitude, longitude] = position;

  useEffect(() => {
    const handleError = () => {
      setLoading(false);
      setError(true);
    };

    const handleSuccess = position => {
      const { latitude, longitude } = position.coords || {};
      setPosition([latitude, longitude]);
      setLoading(false);
      setError(false);
    };

    const getForecastData = () => {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

      if (latitude && longitude) {
        fetch(`${url}?lat=${latitude}&lon=${longitude}&units=metric&APPID=${APPID}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
        });
      }
    };

    getForecastData();
  }, [latitude, longitude]);

  return { data, error, loading };
};

export default useUserLocation;
