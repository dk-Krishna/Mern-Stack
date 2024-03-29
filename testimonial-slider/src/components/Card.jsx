import React, { Fragment } from 'react';

// importing react icons
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = ({ review }) => {
  return (
    <Fragment>
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className='aspect-square rounded-full w-[140px] h-[140px]' src={review.image} alt={review.name} />
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{ review.name }</p>
                <p className='text-violet-300 uppercase text-sm'>{ review.job }</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>

            <div className='text-cneter mt-4 text-slate-500'>
                { review.text }
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>
        </div>
    </Fragment>
  );
};

export default Card;