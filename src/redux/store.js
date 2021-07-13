import { configureStore } from '@reduxjs/toolkit';

import appReducer from './reducers/appReducer';

export default configureStore({
  reducer: {
    app: appReducer,
    /// add other reducers here
  }
});
