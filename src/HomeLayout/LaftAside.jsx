import React, { Suspense } from 'react';
import Categories from '../Components/Categories';

const LaftAside = () => {
    return (
        <div>
            {/* loading and categories...... */}
         <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <Categories ></Categories>
         </Suspense>
        </div>
    );
};

export default LaftAside;