import React from 'react';
import swimingImage from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playImg from '../assets/playground.png'

const Quejon = () => {
    return (
        <div>
            <h1 className='font-bold bg-base-300 p-3'>QueJon</h1>
            <div className='space-y-5'>
            <img src={swimingImage} alt="" />
            <img src={classImg} alt="" />
            <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Quejon;