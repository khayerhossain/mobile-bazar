import React from 'react';
import Hero from '../../Components/Hero/Hero';
import PhonesContainer from '../PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';
const Home = () => {
  const phoneData=useLoaderData();
  // console.log(phoneData);
    return (
        <div>
          <Hero></Hero>
          <PhonesContainer phoneData={phoneData}></PhonesContainer>
        </div>
    );
};

export default Home;