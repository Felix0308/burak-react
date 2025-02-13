import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), // => setPopularDishes commandasini setPopularDishes reduceri orqali hosil qilib oldik
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
}); // setPopularDishes: commanda va reducer ni bir xil atadik va 1 chi kelgan commanda, 2 chi kelgan reducer


export default function HomePage() {
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch()); // function component ichida setPopularDishes ni caqirib qo'lga olyapmiz

  // console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    // Backend server data request => Data (backenddan json formatda data krib keladi)

    const product = new ProductService(); // ProductService class orqali yangi product objectini hosil qildik
    // shu objectimizni methodlari yordamida backenddan malumotlarni chaqirib olamiz
    product
      .getProducts({
        // product objectini getProduct methodi inputni qiymatini kiritishga majbur qiladi
        page: 1,
        limit: 4,
        order: "productViews", // order - productViews ga asoslangan
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        // backenddan data qabul qiladi
        // console.log("data passed here:", data);
        setPopularDishes(data); // qabul qilingan datani (redux Storage ga)setPopularDishes ga yuklaydi
      })
      .catch((err) => console.log(err));

      product
        .getProducts({
          page: 1,
          limit: 4,
          order: "createdAt",  // eng oxiri qo'shilgan taomlar 
          // productCollection: ProductCollection.DISH,
        })
        .then((data) => {
          setNewDishes(data);
        })
        .catch((err) => console.log(err));
    // Slice: Data => Store (Slice mantig'i Backend dan kelgan Datani Redux Storage ga joylaydi )
  }, []);
  
  return (
    // return ichiga view ni joylandi
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
