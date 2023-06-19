import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {CarInfoType} from "../../types/CarInfoType";

type AppStoreType = {
  cars: CarInfoType[];
  category: string;
  language: string;
};

const initialState: AppStoreType = {
  cars: [],
  category: "Все",
  language: "RU",
};

export const appSlice = createSlice({
  name: "appInfo",
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<CarInfoType[]>) => {
      state.cars = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    changeLanguage: (state) => {
      state.language = state.language === "RU" ? "EN" : "RU";
    },
  },
});

export const {setCars, setCategory, changeLanguage} = appSlice.actions;

export const selectCars = (state: RootState) => state.app.cars;
export const selectCategory = (state: RootState) => state.app.category;
export const selectLanguage = (state: RootState) => state.app.language;

export const appReducer = appSlice.reducer;
