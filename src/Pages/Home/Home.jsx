import React, { useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import PhonesContainer from '../PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  const phoneData = useLoaderData();
  const [phones, setPhones] = useState(phoneData);

  const handleSearch = (event, text) => {
    event.preventDefault();
    if(text===''){
     return setPhones(phoneData);
    
    }
    const searchPhones = phoneData.filter(
      phone =>
        phone?.name?.toLowerCase().includes(text.toLowerCase()) ||
        phone?.brand?.toLowerCase().includes(text.toLowerCase())
    );
    setPhones(searchPhones);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phoneData={phones} />
    </div>
  );
};

export default Home;
