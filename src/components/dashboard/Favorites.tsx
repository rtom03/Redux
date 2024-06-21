
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Item {
  id: number;
  Categories: string;
  Shopimage:string;
  Gouferimage:string;
  // Define other properties here
}

const Favorites: React.FC = () => {
  const favoriteItems = useSelector((state: RootState) => state.favorites.favoriteItems);

  return (
    <div>
      <h2>Favorite Items:</h2>
      <ul>
        {favoriteItems.map((item) => (
          <li key={item.id}>
            {item.Categories}
            <img src={item.Gouferimage} alt="test" />
          
            {/* Display other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

