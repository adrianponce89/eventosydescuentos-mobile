import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import schedulesReducer from './slices/schedulesSlice';

export default configureStore({
  reducer: {
    schedules: schedulesReducer,
    form: formReducer,
  },
  devTools: true,
});
