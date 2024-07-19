import { configureStore } from '@reduxjs/toolkit';
import search from './slices/search';

const store: any = configureStore({
  reducer: {
    search,
  },
});

export default store;
