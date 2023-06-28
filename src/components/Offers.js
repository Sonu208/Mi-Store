import React from 'react';
import Offer from './Offer';
import '../styles/Offers.css';

const Offers = ({ offer }) => {
  if (!offer || !Array.isArray(offer)) {
    // Handle the case when 'offer' is undefined or not an array
    return null; // or return a default content/error message if desired
  }

  return (
    <div className="offersSection">
      {offer.map((item, index) => (
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
      ))}
    </div>
  );
};

export default Offers;