import { createSlice } from '@reduxjs/toolkit';

export const appReducer = createSlice({
  name: 'appReducer',
  initialState: {
    drawerClosed: true
  },
  reducers: {
    toggleDrawer: (state) => {
      state.drawerClosed = !state.drawerClosed;
    }
  }
});

// action creator
export const { toggleDrawer } = appReducer.actions;

// selectors
export const selectIsDrawerClosed = (state) => state.drawerClosed;

export default appReducer.reducer;
