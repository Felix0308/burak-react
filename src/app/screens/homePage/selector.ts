import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

//
const selectHomePage = (state: AppRootState) => state.homePage;
// HomePage ga daxldor Storage = type AppRootState bilan belgilangan  => umumiy application state ni ichidagi homePage ni qo'lga olib beradi

export const retrievePopularDishes = createSelector(
  selectHomePage, //=> birinchi argument -yuqoridagi constanta
  (HomePage) => HomePage.popularDishes // HomePage ni qo'lga kiritib olib ichidan popularDishes qabul qilib berish mantig'i
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
