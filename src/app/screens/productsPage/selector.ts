import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectorProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
  selectorProductsPage,
  (ProductsPage) => ProductsPage.restaurant
);

export const retrieveChosenProduct = createSelector(
  selectorProductsPage,
  (ProductsPage) => ProductsPage.chosenProduct
);

export const retrieveProducts = createSelector(
  selectorProductsPage,
  (ProductsPage) => ProductsPage.products
);