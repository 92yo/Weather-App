import axios from "axios";

const API = process.env.REACT_APP_API;
const URL = process.env.REACT_APP_URL;


export const getAutoCompleteList = (cityName) => async (dispatch) => {
  if (cityName !== "") {
    await dispatch({ type: "GET_AUTOCOMPLETE_REQ" });
    const response = await axios.get(
      `${URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API}`
    );
    await dispatch({
      type: "GET_AUTOCOMPLETE_RES",
      payload: response.data.map((autoComplete) => ({
        cityName: autoComplete.LocalizedName,
        key: autoComplete.Key,
        country: autoComplete.Country.LocalizedName,
      })),
    });
  }
};


export const setLocationByAutoComplete = (location) => {
  return {
    type: "SET_LOCATION",
    payload: location,
  };
};

export const setAutoCompleteValue = (text) => {
  return {
    type: "SET_TEXT",
    payload: text,
  };
};

export const resetAutoComplete = () => {
  return {
    type: "RESET_AUTOCOMPLETE",
  };
};
