import React, { useEffect, useState } from 'react';
import PhonesCard from '../PhoneCard/PhonesCard';
import { getFavorite, removeFavorite } from '../../Utilites';

const Favorite = () => {
    const[displayPhones,setDisplayPhone]=useState([])
    useEffect(()=>{
const savePhone=getFavorite()
setDisplayPhone(savePhone)
    },[])
    const handleDelete=id=>{
        removeFavorite(id)
        setDisplayPhone(getFavorite)
    }
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto md:px-12 gap-4'>
{
     displayPhones.map(phone => <PhonesCard
                        key={phone.id}
                        phone={phone}
                        deletable={true}
                        handleDelete={handleDelete}
                    ></PhonesCard>)
}
            </div>
        </div>
    );
};

export default Favorite;