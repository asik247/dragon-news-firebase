import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../Components/FindUs';
import Quejon from '../Components/Quejon';

const RightAside = () => {
    return (
        <div className='space-y-5'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <Quejon></Quejon>
        </div>
    );
};

export default RightAside;