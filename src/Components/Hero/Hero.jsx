import React, { useState } from 'react';
import BannerImage from '../../assets/banner.png'


const Hero = ({handleSearch}) => {
    const [searchText, setSearchText]=useState('');
    return (
        <div className='py-12'>
            <img className='w-full mx-auto md:max-w-md' src={BannerImage} alt="" />
            <h2 className='font-thin text-7xl text-gray-900 text-center'>Browse, Search, View, Buy</h2>
            <p className='text-center text-gray-500 pt-3'>Best place to browse, search, view details and purchase of top flagship phones
            of the current time - FlagshipFaceOff</p>
            <form onSubmit={event=>{
                handleSearch(event,searchText);
                // reset input field
                setSearchText('')
            }} className=' flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                <input value={searchText}
                onChange={event=>setSearchText(event.target.value)} type="text" placeholder='search' className='bg-white border mt-3 border-gray-300  rounded shadow-md w-2/3 h-13 mr-1 px-4 mb-3 focus:outline-none focus:shadow-outline' />
                <button href="#_" className="relative inline-block text-lg group">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Button Text</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
            </form>
        </div>
    );
};

export default Hero;