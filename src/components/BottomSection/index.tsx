import React from 'react';

import './styles.css';
import ForecastCard from './ForecastCard';
import placeAndImage from '../../helpers/historicalPlaces';
import { randomIntFromInterval } from '../../helpers/helperFNs';
import Spinner from '../../helpers/Spinner';

interface BottomSectionProps {
  isLoadingForecast: boolean;
  forecastData: {
    temp: number;
    ts: number;
    weather: { icon: string };
    datetime: number;
  }[];
}
const randomInt = randomIntFromInterval(0, 4);
const randomPlaceAndImage = placeAndImage[randomInt];
const { caption: randomPlace, imgSrc: randomImage } = randomPlaceAndImage;

const BottomSection = ({ forecastData, isLoadingForecast }: BottomSectionProps): JSX.Element => {
  return (
    <div
      className='bottom-section'
      style={{
        backgroundImage: `url(${randomImage})`,
      }}
    >
      <div className='gradient'></div>
      <div className='forecast-and-day-time'>
        <div className='forecast-wrapper'>
          {/* The Weather Forecast Element */}
          {isLoadingForecast ? (
            <Spinner />
          ) : (
            forecastData?.slice(0, 14).map((data, idx) => {
              return (
                <ForecastCard
                  iconCode={data.weather.icon}
                  dateTime={data.datetime}
                  key={data.ts}
                  temperature={Math.round(data.temp)}
                  isToday={idx === 0}
                />
              );
            })
          )}
        </div>
      </div>
      <div className='caption'>{randomPlace}</div>
    </div>
  );
};

export default BottomSection;
