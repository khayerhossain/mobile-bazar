import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Buttons from '../../Components/Buttons/Buttons';
import { IoCart} from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";
import { addToFavorite } from '../../Utilites';
const PhoneDetails = () => {
  const phoneDetails = useLoaderData();
  const { id } = useParams();

  const singlePhone = phoneDetails.find(phone => phone.id === parseInt(id));

  if (!singlePhone) {
    return <p className="text-center mt-10 text-red-500">Phone not found.</p>;
  }

  const {
    name,
    description,
    image,
    brand,
    model,
    storage = [],
    price = {},
    cameraInfo
  } = singlePhone;

  const handleFavorite=()=>{
addToFavorite(singlePhone)
  }

  return (
    <div className="mt-8 px-4">
    <div className="flex justify-center items-center">
      <img className="w-full max-w-md rounded-xl shadow-lg" src={image} alt={name} />
    </div>
  
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6 mt-10 border border-gray-200">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">{name}</h1>
  
      {/* Flex container for Brand/Model + Buttons */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Details:</h2>
          <p className="text-gray-700"><strong>Brand:</strong> {brand}</p>
          <p className="text-gray-700"><strong>Model:</strong> {model}</p>
        </div>
  
        <div className="flex gap-2">
<Buttons  label={<IoCart />}></Buttons>
<Buttons onClick={handleFavorite} label={<MdBookmarkAdd></MdBookmarkAdd>}></Buttons>
<button></button>
        </div>
      </div>
  
      {/* Storage Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Storage Options:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {storage.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
  
      {/* Price Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Prices:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {Object.entries(price).map(([storageSize, amount], index) => (
            <li key={index}>
              {storageSize}: <span className="text-green-600 font-semibold">${amount}</span>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Camera Info */}
      {cameraInfo && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Camera Info:</h2>
          <p className="text-gray-700">{cameraInfo}</p>
        </div>
      )}
  
      {/* Description */}
      {description && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Description:</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  </div>
  
  
  );
};

export default PhoneDetails;
