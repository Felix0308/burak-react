import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
// butun applicationimizda ishlatilayotgan ma'lumotlarni type integratsiyasi
export interface AppRootState {
  homePage: HomePageState; // homePage dagi barcha datalarni typeni HomePageState bilan belgilab oldik
}

/** HOMEPAGE **/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

/** PRODUCTS PAGE **/

/** OERDERS PAGE **/
