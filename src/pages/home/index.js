/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Header from './Components/Header/index';
import  Carousel from './Components/Carousel/index';
import api from '../../services/api';
import CardProducts from '../../Components/CardProducts'
import { Helmet } from 'react-helmet';

const Home = () => {
  

    return (
        <>  
            <Helmet>
                <title>Tech Store | Home</title>
            </Helmet>
             <Carousel />
             <CardProducts/>
        </>
    )
}

export default Home;