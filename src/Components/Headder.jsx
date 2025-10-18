import React from 'react';
import logo from '../assets/logo.png'

const Headder = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
          <img className='w-[350px]' src={logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, laudantium!</p>
        </div>
    );
};

export default Headder;