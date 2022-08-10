import React from 'react';

interface TogglerProps {
  clickHandler: () => void;
  isViewingFront: boolean;
}

function Toggler({ clickHandler, isViewingFront }: TogglerProps) {
  return (
    <button className='toggler-btn' onClick={clickHandler}>
      See {isViewingFront ? 'Back' : 'Front'}&nbsp;
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path fill='none' d='M0 0h24v24H0z'></path>
        <path d='M18.6 19.5H21v2h-6v-6h2v2.73c1.83-1.47 3-3.71 3-6.23 0-4.07-3.06-7.44-7-7.93V2.05c5.05.5 9 4.76 9 9.95 0 2.99-1.32 5.67-3.4 7.5zM4 12c0-2.52 1.17-4.77 3-6.23V8.5h2v-6H3v2h2.4A9.966 9.966 0 002 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93zm12.24-3.89l-5.66 5.66-2.83-2.83-1.41 1.41 4.24 4.24 7.07-7.07-1.41-1.41z'></path>
      </svg>
    </button>
  );
}

export default Toggler;
