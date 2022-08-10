import React, { useState } from 'react';

import MonthlyCalendar from './Calendar';
import './styles.css';
import Spinner from '../../helpers/Spinner';
// prettier-ignore
import { day, month, year, monthName, dayOfTheYear, dayName,} from '../../helpers/CustomDate';
import { phaseType } from '../../helpers/helperFNs';
const date = new Date();

interface MainSectionProps {
  isLoadingQuote: boolean;
  isLoadingNames: boolean;
  isLoadingForecast: boolean;
  author?: string;
  text?: string;
  phase: phaseType;
  boy?: string;
  girl?: string;
  phaseImg: string;
}

const MainSection = ({
  isLoadingQuote,
  isLoadingNames,
  isLoadingForecast,
  author,
  text,
  phase,
  phaseImg,
  boy,
  girl,
}: MainSectionProps): JSX.Element => {
  return (
    <div className='top-section'>
      {/* left sub section */}
      <div className='left-sub-section'>
        {isLoadingQuote ? (
          <Spinner />
        ) : (
          <div className='quote'>
            <div className='text'>&quot;{text}&quot;</div>
            <div className='author'>-{author || 'Anonymus'}-</div>
          </div>
        )}

        {isLoadingForecast ? (
          <Spinner />
        ) : (
          <div className='moon-phase'>
            <div className='phase-img' style={{ backgroundImage: `url(${phaseImg})` }}></div>
            <span className='phase'>{phase}</span>
          </div>
        )}

        {isLoadingNames ? (
          <Spinner />
        ) : (
          <div className='baby-names'>
            <div className='for-boys'>
              <span>Boy: </span>
              {boy}
            </div>
            <div className='for-girls'>
              <span>Girl: </span>
              {girl}
            </div>
          </div>
        )}
      </div>

      {/* main sub section */}
      <div className='main-sub-section'>
        <div className='year'>{year}</div>
        <div className='month'>{monthName}</div>
        <div className='date-summary'>
          {month}. Month - {dayOfTheYear}. Day of Year
        </div>
        <div className='day-number'>{day}</div>
        <div className='day-name'>{dayName}</div>
        <div className='important-day'>important day</div>
      </div>

      {/* right sub section */}
      <div className='right-sub-section'>
        <MonthlyCalendar year={date.getFullYear()} month={date.getMonth() + 1} startWithMon={1} />
      </div>
      {/*  */}
    </div>
  );
};

export default MainSection;
