import {SET_CARS_INFO, SET_CATEGORY, SET_LANGUAGE} from "./actions";

const initialState = {
  cars: [],
  category: "Все",
  language: "ru",
};

export default function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_CARS_INFO:
            return {...state, cars: action.payload};
        case SET_CATEGORY:
            return {...state, category: action.payload};
        case SET_LANGUAGE:
            return {...state, language: action.payload};
        default:
            return state;
    }
}
