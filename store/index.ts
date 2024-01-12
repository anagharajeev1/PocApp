import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../store/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;


