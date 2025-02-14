import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import HomePageReducer from './screens/homePage/slice';
import ProductsPageReducer from './screens/productsPage/slice';
import reduxLogger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger), // reduxLogger integratsiaysisni amalga oshirdik
  // reduxLogger => redux Storage da qanday malumotlar mavjud va qanday o'zgarayotganaini login qilib beradi
  reducer: {
    homePage: HomePageReducer, // Redux Storage ga HomePage screen componentimizga daxldor bo'lgan Slice ichidagi reducerni bog'ladik
    productsPage: ProductsPageReducer,
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
