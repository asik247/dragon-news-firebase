import React from 'react';
import { Outlet } from 'react-router';
import Headder from '../Components/Headder';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LaftAside from '../HomeLayout/LaftAside';
import RightAside from '../HomeLayout/RightAside';

const HomePage = () => {
    return (
        <div>
            <header>
               <Headder></Headder>
               {/* latest code.. */}
               <section className='w-11/12 mx-auto my-5'>
                <LatestNews></LatestNews>
               </section>
               {/* navbar code ... */}
               <nav className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
               </nav>
             
            </header>
            <main className='w-11/12 mx-auto my-3 *:border'>
                {/* <section className='left-site'></section> */}
                 <aside>
                 <LaftAside></LaftAside>
              </aside>
                <section className='main'>
                <Outlet></Outlet>
                </section>
                {/* <section className='right-site'></section> */}
                 <aside>
                 <RightAside></RightAside>
              </aside>
            </main>
        </div>
    );
};

export default HomePage;