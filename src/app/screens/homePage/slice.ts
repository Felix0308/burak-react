import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";
import { HomeMax } from "@mui/icons-material";

const initialState: HomePageState = {
  // homePage screen componentiga daxldor sliceni hosil qildik
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  // bitta argument path bo'ladi, unga options larni yoziladi
  name: "homePage", // Slice nomi
  initialState, // yuqoridagi hosilgan qilingan boshlang'ich qiymat
  reducers: {
    // yuqoridagi ma'lumotlarni o'zgartiruvchi reducerlar
    setPopularDishes: (state, action) => {
      // state => yuqoridagi HomePageState
      // action => useEffect hook orqali Slice mantig'iga ko'ra backendan kelgan saqlab olingan Data
      state.popularDishes = action.payload;
      // actionni payload qismida kirib kelgan malumotni initialState da joylashgan popularDishes nomli key mizni value siga tenglashtir yoki key ostidagi valueni yangilab ber
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularDishes, setNewDishes, setTopUsers } =  // bu reducerlarni tashqarida ishlatish uchun export qilindi
homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer; 
export default HomePageReducer;  
// homePageSlice ga daxldor bo'lgan reducerni yaxlit holda tashqariga export qilindi
