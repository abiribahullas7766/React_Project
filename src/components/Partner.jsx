import React from 'react';
import MovingText from './MovingText';


import company1 from "../assets/partner_1.svg";


const Partner = () => {
  return (
    <div>
        <MovingText />

        { /* company logo */}
        <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center gap-8 lg:px-24 px-4 pt-5'>
            <img src={ company1 } alt='' />
            <img src={ company1 } alt='' />
            <img src={ company1 } alt='' />
            <img src={ company1 } alt='' />
            <img src={ company1 } alt='' />
            <img src={ company1 } alt='' />
        </div>

        <div className='h-20'></div>
    </div>
  );
};

export default Partner