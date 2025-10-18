import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNew = () => {
    // catagory thek id nilam....
    const {id}= useParams ()
    const data = useLoaderData();
    const [categoryNews,setCategoryNews] = useState([])
    // console.log(id,data)
    useEffect(()=>{
        // All nes show
        if(id=="0"){
            setCategoryNews(data)
            return
        }
        // today news...
        else if(id=='1'){
              const filterNews = data.filter(news=>news.others.is_today_pick== true)
              setCategoryNews(filterNews)
        }
        // id diya filter koro
       else{
         const filterNews = data.filter(news=>news.category_id== id)
        console.log(filterNews)
        setCategoryNews(filterNews)
       }
    },[data,id])
    
    return (
        <div>
            <h1 className='font-bold'>Total News <span className='text-red-500'>{categoryNews.length}</span> Found</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNew;