import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../redux/store";
import { toggleFavorite } from "../features/favoriteSlice/favoritesSlice";

type HeartIconProps = {
  icon: React.ComponentType;
};
interface Item {
  id: number;
  Categories: string;
  Shopimage:string;
  Gouferimage:string;
  // Define other properties here
}

const Navbar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const favoriteItems = useSelector((state: RootState) => state.favorites.favoriteItems);

  const infos = [
    {
      id: 1,
      Categories: "Food & Beverage",
      Shopimage: "/icons/Greencloud.png",
      Gouferimage: "/icons/explore1.png",
      Goufername: "Azeez Ibrahim",
      text: "These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: "50+",
      icon: FaHeart,
    },
    // Add other items...
  ];

  // const handleIconClick = (id: number) => {
  //   dispatch(toggleFavorite(id));
  // };
  const handleIconClick = (item: Item) => {
    dispatch(toggleFavorite(item));
  };

  return (
    <div>
      {infos.map((item) => (
        <div key={item.id} className="p-2 gap-8 grid row-3">
          <div className="flex flex-row items-center absolute z-10 justify-between gap-8">
            <h1>{item.Categories}</h1>
            <button onClick={() => handleIconClick(item)}>
            <FaHeart color={favoriteItems.some((favItem) => favItem.id === item.id) ? 'green' : 'black'} />

          </button>
          </div>
          <img src={item.Shopimage} alt="Shop" width={200} className="relative" />
          <h2>{item.Goufername}</h2>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
