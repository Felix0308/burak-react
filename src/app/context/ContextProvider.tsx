import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobals";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData");
  // browser authentication jarayonini amalga oshirmagan bo'lsa ya'ni cookini vaqti tugagan bo'lsa, localstoragedagi memberDatani o'chirish mantig'i

  const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData") // cookini tekshirib, localstorgaedagi memberDatani olishga ruxsat berish mantiqi
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null
  );

  const [orderBuilder, setOrderBuilder] = useState<Date>(new Date());
  console.log("=== verify ===");

  return (
    <GlobalContext.Provider
      value={{ authMember, setAuthMember, orderBuilder, setOrderBuilder }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
