import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/** REACT APP STATE **/
// butun application da ishlatilayotgan ma'lumotlarni type integratsiyasi
export interface AppRootState {
  homePage: HomePageState; // homePage dagi barcha datalarni type integratsiayasini HomePageState bilan belgilab oldik
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  // HomePageState => homePage screen componentimizni ichida ishlatilayotgana butun ma'lumotlarni o'zida ifoda etadigon interface.
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/** ORDERS PAGE **/
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}