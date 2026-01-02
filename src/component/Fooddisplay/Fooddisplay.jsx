import React, { useContext, useState } from 'react';
import './Fooddis.css';
import { Storecontext } from '../../Context/Storecontext';
import Fooditem from '../Fooditem/Fooditem';

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);
  const [visibleCount, setVisibleCount] = useState(16); // show first 16 items

  // Filter items by category
  const filteredList = food_list?.filter(
    (item) => category === "All" || item.category === category
  );

  // Show more items on click
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 16); // show 16 more each click
  };

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className='food-display-list'>
        {filteredList?.slice(0, visibleCount).map((item, index) => (
          <Fooditem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredList?.length && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            className='show-more-btn'
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Fooddisplay;
