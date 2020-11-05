import { createSlice } from '@reduxjs/toolkit';
import schedulesService from '../../services/schedulesService';

const schedulesSlice = createSlice({
  name: 'schedules',
  initialState: { loaded: false, loading: false, schedules: [], error: null },
  reducers: {
    getSchedulesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getSchedulesSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.schedules = action.payload;
    },
    getSchedulesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSchedulesRequest,
  getSchedulesSuccess,
  getSchedulesFailure,
} = schedulesSlice.actions;

export function getSchedules() {
  return (dispatch) => {
    dispatch(getSchedulesRequest());
    schedulesService.getSchedules().then(
      (schedules) => {
        dispatch(getSchedulesSuccess(schedules));
      },
      (error) => {
        dispatch(getSchedulesFailure(error.toString()));
      }
    );
  };
}

export default schedulesSlice.reducer;
