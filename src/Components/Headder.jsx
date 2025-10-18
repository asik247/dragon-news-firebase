import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';



const Headder = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
          <img className='w-[350px]' src={logo} alt="" />
          <p> sit amet consectetur adipisicing elit. Voluptates, laudantium!</p>
       
          {/* react fns use first time.. date time year ar janno.. and install...*/}

          <p> {format(new Date(),'EEEE,MMMM MM,yyyy')}</p>
        </div>
    );
};

export default Headder;