import { useEffect, useState } from 'react';
import useWeatherQuery from './useWeatherQuery';

const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 5000,
};

const useUserLocation = (skip) => {
  const [position, setPosition] = useState([]);
  const [latitude, longitude] = position;
  const params = `lat=${latitude}&lon=${longitude}`;
  const { data, handleError } = useWeatherQuery({ isLoading: true, params, skip: skip || !latitude || !longitude });

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords || {};
    setPosition([latitude, longitude]);
  };

  useEffect(() => {
    if (!skip) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }
  }, [handleError, skip]);

  return data;
};

export default useUserLocation;
