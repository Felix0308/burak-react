import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import { CartItem } from "../lib/types/search";

function App() {
  const location = useLocation();
  // basket mantig'i:
  const cartJson: string | null = localStorage.getItem("cartData"); // refresh qilinganda localStorage dan malumotni qabul qilib oldik
  const currentCart = cartJson ? JSON.parse(cartJson) : []; // cartni oxirgi saqlangan malumotiga asoslanib boshlangich cartItemni qiymatini JSON formatdan objectga aylantirib qo'lga olib beradi
  const [cartItems, setCartItems] = useState<CartItem[]>([currentCart]); //=> boshlang'ich qiymatni cartItemga tengladik. initialstate valueni hosil qildik

  /** HANDLERS **/

  // onAdd defination qismi:
  const onAdd = (input: CartItem) => {
    // onAdd ishga tushganda input kirib keladi
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    ); // basketga qo'shayotgan product basketda bor/yuqligini ya'ni cartItems da kirib kelgan inputni bor/yuqligini tekshiramiz.
    if (exist) {
      // agar mavjud bo'lsa
      const cartUpdate = cartItems.map(
        (item: CartItem) =>
          item._id === input._id
            ? { ...exist, quantity: exist.quantity + 1 } // mavjud productni topib quantitysini 1 ga oshiryapmiz
            : item // boshqa productlarda item ni o'zini return qiladi
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      // mavjud bo'lmasa
      const cartUpdate = [...cartItems, { ...input }];
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate)); // yangilangan cart ni malumotini localStorage ga biz nomlangan nom("cartData") bilan JSON formatda saqladi
    }
  };

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar cartItems={cartItems} /> // HomeNavbarga cartItems ni path qildik
      ) : (
        <OtherNavbar cartItems={cartItems} /> // OtherNavbarga cartItems ni path qildik
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
