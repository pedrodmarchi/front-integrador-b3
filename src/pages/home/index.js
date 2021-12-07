/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Header from './Components/Header/index';
import  Carousel from './Components/Carousel/index';
import api from '../../services/api';
import CardProducts from '../../Components/CardProducts'

const Home = () => {
  

    return (
        <>
             <Carousel />
             <CardProducts/>
        </>
    )
}

export default Home;