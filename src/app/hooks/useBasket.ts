import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasket = () => {
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

  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );
    if (exist.quantity === 1) {
      // eng oxirgi productni remove qilsak
      const cartUpdate = cartItems.filter(
        (item: CartItem) => item._id !== input._id
      ); // exist productini o'chirib beradi, ya'ni unga teng bo'lmagan qolgan elemnetlarni cardUpdate ga qaytarib beradi
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = cartItems.map(
        (item: CartItem) =>
          item._id === input._id // remove qilayuotgan productimizni topadi
            ? { ...exist, quantity: exist.quantity - 1 } // va quantity sini 1 ga kamaytirib beradi
            : item // qolganini cartItem ga joylab beradi
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onDelete = (input: CartItem) => {
    const cartUpdate = cartItems.filter(
      (item: CartItem) => item._id !== input._id
    );
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setCartItems([]); // setCartItems ni bo'sh Array[] ga o'zgartiradi
    localStorage.removeItem("cartData"); // localStorage dagi "cartData" ga bog'liq qiymatlarni o'chirib beradi
  };

  return {
    // tashqariga return qilyapmiz
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;
