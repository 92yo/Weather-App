import { combineReducers } from "redux";

import favoritesReducer from "./favorite";
import tempReducer from "./tempConverter";
import darkModeReducer from "./darkMode";
import loadingReducer from "./isLoading";

import weatherReducer from "./weather";
import locationReducer from "./location";
import autoCompleteReducer from "./autoComplete";

const rootReducers = combineReducers({
  favoritesData: favoritesReducer,
  tempConverter: tempReducer,
  isDark: darkModeReducer,
  isLoading: loadingReducer,
  weather: weatherReducer,
  location: locationReducer,
  autoComplete: autoCompleteReducer,
});

export default rootReducers;
