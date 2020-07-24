import { loadState } from "../../helpers/localStorage";

const intialState = loadState();

const favoritesReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_FAVORITE":
      return state.map((favorite) => {
        return {
          ...favorite,
          currentWeather: action.payload,
        };
      });
    default:
      return state;
  }
};

export default favoritesReducer;
