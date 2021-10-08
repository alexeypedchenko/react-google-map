import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './slices/locationSlice';
import pointSlice from './slices/pointSlice';
import routeSlice from './slices/routeSlice';

export default configureStore({
  reducer: {
    point: pointSlice,
    route: routeSlice,
    location: locationSlice,
  },
})
