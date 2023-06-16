import {Dispatch} from "redux";
import { CarInfoType } from "../types/CarInfoType";

export const SET_CARS_INFO = "SET_CARS_INFO";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setCars = (cars: CarInfoType[]) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_CARS_INFO,
        payload: cars,
    })
}

export const setCategory = (category: string) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_CATEGORY,
        payload: category,
    })
}

export const setLanguage = (language: string) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_LANGUAGE,
        payload: language,
    })
}