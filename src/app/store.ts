import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './screens/homePage/slice';

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer, // Redux Storage ga HomePage screen componentimizga daxldor bo'lgan Slice ichidagi reducerni bog'ladik
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
