import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  // Selector: Store => Data (Stodan biz saqlagan Datani qabul qilib oladi)
  useEffect(() => {
    // Backend server data request => Data (backenddan json formatda data krib keladi)

    // Slice: Data => Store (Slice mantig'i Backend dan kelgan Datani Redux Storage ga joylaydi )

  }, []);

  return (  // return ichiga view ni joylandi 
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
