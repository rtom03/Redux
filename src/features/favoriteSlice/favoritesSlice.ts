import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

interface Item {
  id: number;
  Categories: string;
  Shopimage:string;
  Gouferimage:string;
  // Define other properties here
}

interface FavoritesState {
  favoriteItems: Item[];
}

const initialState: FavoritesState = {
  favoriteItems: [],
};
  const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const index = state.favoriteItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        state.favoriteItems.push(item);
      } else {
        state.favoriteItems.splice(index, 1);
      }
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer);

export const { toggleFavorite } = favoritesSlice.actions;
export default persistedReducer;
