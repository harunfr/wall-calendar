import React, { useState, useEffect } from 'react';

import './app-style.css';
import MainSection from './components/MainSection';
import BottomSection from './components/BottomSection';
import BackPage from './components/BackPage';
import { fetchData, randomIntFromInterval, getPhaseAndImage, ids } from './helpers/helperFNs';
import { day, month } from './helpers/CustomDate';
import useFetch from './helpers/useFetch';
import Toggler from './helpers/Toggler';

// Random Indexes
const randomQuoteIndex = randomIntFromInterval(0, 1642);
const randomDessertIndex = randomIntFromInterval(0, 63);
const randomStoryIndex = randomIntFromInterval(0, 145);

// Front Page Resources
const quotesUrl = 'https://type.fit/api/quotes';
const namesUrl = 'https://www.behindthename.com/api/random.json?key=ha569836055';
const forecastUrl =
  'https://api.weatherbit.io/v2.0/forecast/daily?city=Izmir&key=dd2486050b6a4453a84f676ff7d41bd4';

// Back Page Resources
const storiesUrl = 'https://shortstories-api.herokuapp.com/stories';
const onThisDayUrl = 'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/08/05';
const onThisDayBirthsUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;
const recipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

/** Only Get Dessert Recipes */
const onlyDessertsUrl /** length is 64 */ =
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';

const randomDessertUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ids[randomDessertIndex]}`;

function App() {
  const [isViewingFront, setIsViewingFront] = useState(true);
  // quotes
  const [quotes, isLoadingQuotes] = useFetch(quotesUrl);
  const quote = quotes?.[randomQuoteIndex];
  // forecast
  const [forecast, isLoadingForecast] = useFetch(forecastUrl);
  const phaseAndImage = forecast ? getPhaseAndImage(forecast.data[0].moon_phase_lunation) : '';

  const [names, isLoadingNames] = useFetch(namesUrl);

  // back page fetching
  const [stories, isLoadingStories] = useFetch(storiesUrl);
  const [onThisDay, isLoadingOnThisDay] = useFetch(onThisDayBirthsUrl);
  const [recipe, isLoadingrecipe] = useFetch(randomDessertUrl);
  // console.log(stories?.[randomStoryIndex]); /** randomStoryIndex */
  // console.log(onThisDay?.births.slice(0, 10));
  // console.log(recipe?.meals[0])
  /** add preview to the end of image source to get thumbnail */

  const fetchedStory = stories?.[randomStoryIndex];

  const births = onThisDay?.births.slice(0, 10);

  const fetchedRecipe = recipe?.meals[0];

  const handleClick = () => {
    console.log('clicked!');
    setIsViewingFront(!isViewingFront);
  };

  return (
    <div className={'main-wrapper'}>
      <Toggler isViewingFront={isViewingFront} clickHandler={handleClick} />
      {isViewingFront ? (
        <div className='front-page'>
          <MainSection
            // props for spinner
            isLoadingNames={isLoadingNames}
            isLoadingForecast={isLoadingForecast}
            isLoadingQuote={isLoadingQuotes}
            // quote props
            author={quote?.author}
            text={quote?.text}
            // moon props
            phase={phaseAndImage.phase}
            phaseImg={phaseAndImage.phaseImg}
            // name props
            boy={names?.names[0]}
            girl={names?.names[1]}
          />
          <BottomSection forecastData={forecast?.data} isLoadingForecast={isLoadingForecast} />
        </div>
      ) : (
        <BackPage
          // short story props
          title={fetchedStory?.title}
          author={fetchedStory?.author}
          body={fetchedStory?.story}
          moral={fetchedStory?.moral}
          // born on this day props
          births={births}
          // recipe props
          recipe={fetchedRecipe}
        />
      )}
    </div>
  );
}

export default App;
