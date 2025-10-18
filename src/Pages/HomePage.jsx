import React from 'react';
import { Outlet } from 'react-router';
import Headder from '../Components/Headder';

const HomePage = () => {
    return (
        <div>
            <header>
               <Headder></Headder>
            </header>
            <main>
                <section className='left-site'></section>
                <section className='main'>
                <Outlet></Outlet>
                </section>
                <section className='right-site'></section>
            </main>
        </div>
    );
};

export default HomePage;