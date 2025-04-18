import React from 'react';
import PhonesCard from '../PhoneCard/PhonesCard';

const PhonesContainer = ({phoneData}) => {
    console.log(phoneData);
    return (
        <div className='py-12'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{
                phoneData.map(phone => <PhonesCard
                    key={phone.id}
                    phone={phone}
                ></PhonesCard>)
}
            </div>
        </div>
    );
};

export default PhonesContainer;