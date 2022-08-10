import React from 'react';
import mapCodeToIcon from '../../images/weatherIcons';

interface CardProps {
  iconCode: string;
  temperature: number;
  dateTime: number;
  isToday: boolean;
}

function ForecastCard({ iconCode, dateTime, isToday, temperature }: CardProps) {
  const iconSrc = mapCodeToIcon(iconCode);

  return (
    <div
      className='card'
      style={{
        color: isToday ? '#f00' : '#000',
      }}
    >
      <div className='day'>{new Date(dateTime).toLocaleString('en-us', { weekday: 'short' })}</div>
      <div className='weather-icon' style={{ backgroundImage: `url(${iconSrc}` }}></div>
      <div className='temperature'>{temperature} °C</div>
    </div>
  );
}

export default ForecastCard;
