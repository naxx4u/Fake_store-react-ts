import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './Slices/ProcuctSlices/Favorites'
import  cartSlice  from './Slices/ProcuctSlices/Cart';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  favorites: favoriteSlice,
      cart: cartSlice
});
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store:(any | never | unknown) = configureStore({
  reducer: persistedReducer,

  middleware: [thunk],
});


// export const store:(any | never | unknown) = configureStore({
//     reducer: {
//     favorites: favoriteSlice,
//     cart: cartSlice
//     },
//   })

  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch