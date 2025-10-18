import React from 'react';
import { useParams } from 'react-router';

const CategoryNew = () => {
    // catagory thek id nilam....
    const {id}= useParams ()
    console.log(id)
    
    return (
        <div>
            <h1>catgor new -{id}</h1>
        </div>
    );
};

export default CategoryNew;