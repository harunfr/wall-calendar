import React from 'react';

import './styles.css';
import { getIngredientKeys } from '../../helpers/helperFNs';

interface BackPageProps {
  // Story IProps
  title: string;
  author: string;
  body: string;
  moral: string;
  // Birth Today IProps
  births: [
    {
      text: string;
      year: number;
      pages: [
        {
          [x: string]: any;
          desktop: { page: string };
        },
      ];
    },
  ];
  // Recipe IProps
  recipe: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    [x: string]: string;
  };
}

const BackPage = ({
  // Story Props
  title,
  author,
  body,
  moral,
  // Birth Today Props
  births,
  // Recipe Props
  recipe,
}: BackPageProps): JSX.Element => {
  return (
    <div className='back-page'>
      {/* Short Story */}
      <div className='story'>
        <div className='title'>{title}</div>
        <div className='author-of-story'>{author}</div>
        <p className='body'>
          {'    '}
          {body}
          <br />
          <em className='moral'>
            Moral: <span className='moral-body'>{moral}</span>
          </em>
        </p>
      </div>

      {/* On this day  */}
      <div className='on-this-day'>
        <h3 className='births-title'>Famous People Born Today</h3>
        <ul className='persons'>
          {births?.map((birth) => {
            return (
              <li key={birth.text} className='person'>
                <span className='birth-year'>{birth.year}</span> -{' '}
                <a href={birth.pages[0].content_urls.desktop.page} target='_blank' rel='noreferrer'>
                  {birth.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Dessert Recipe */}
      <div className='recipe'>
        <div className='recipe-name'>{recipe?.strMeal}</div>
        <div
          className='recipe-thumbnail'
          style={{ backgroundImage: `url(${recipe?.strMealThumb}/preview)` }}
        ></div>
        <div>
          <h3 className='ingredients-title'>Ingredients</h3>
          <ul className='ingredients'>
            {getIngredientKeys().map((key, idx) => {
              return (
                <li key={idx} className='ingredient'>
                  {recipe?.[key] || null}
                </li>
              );
            })}
          </ul>
        </div>
        <br />
        <h3 className='instructions-title'>How to Make It?</h3>
        <div className='recipe-body'>{recipe?.strInstructions}</div>
      </div>
    </div>
  );
};

export default BackPage;
