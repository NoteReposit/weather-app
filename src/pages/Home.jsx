import React, { useEffect, useState } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.tmd.go.th/api/Weather3Hours/V2/?uid=api&ukey=api12345&format=json');
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <div>
      <h1>Current Weather</h1>
      <ul>
        {weatherData.Provinces.map((province) => (
          <li key={province.ProvinceNameTh}>
            {province.ProvinceNameTh}: {province.WeatherDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;