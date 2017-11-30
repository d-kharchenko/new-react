import React from 'react';
import Header from './header';
import OurCompany from './ourcompany';
import TopProducts from './topproducts'
import OurTeam from './ourteam';
import OurClients from './ourclients';
import Contacts from './contacts';


const HomePage = () => {
    return(
        <div className="wrap">
            <Header />
            <OurCompany />
            <TopProducts />
            <OurTeam />
            <OurClients />
            <Contacts />
        </div>

    )
};

export default HomePage;