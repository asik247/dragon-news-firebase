import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
           <p className='text-base-100 bg-red-500 p-2'> Latest</p>

           {/* Marquee code..... and install react fast marquee.... */}
           <Marquee className='flex gap-5' pauseOnHover={true}speed={60}>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis eum eveniet, quasi.</p>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis eum eveniet, quasi.</p>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis eum eveniet, quasi.</p>
           </Marquee>
           
        </div>
    );
};

export default LatestNews;