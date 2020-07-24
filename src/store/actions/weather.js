import axios from "axios";

const API = process.env.REACT_APP_API;
const URL = process.env.REACT_APP_URL;

export const getLocation = (cityName) => async (dispatch) => {
  const response = await axios.get(
    `${URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API}`
  );
  await dispatch({
    type: "SET_LOCATION",
    payload: {
      cityName: response.data[0].LocalizedName,
      key: response.data[0].Key,
    },
  });
  await dispatch(getWeather(response.data[0].Key));
};

export const getWeather = (locationKey) => async (dispatch) => {
  await dispatch(getCurrentWeather(locationKey));
  await dispatch(getDailyForecasts(locationKey));
  await dispatch({ type: "TOGGLE_LOADING" });
};

export const getCurrentWeather = (locationKey) => async (dispatch) => {
  const response = await axios.get(
    `${URL}/currentconditions/v1/${locationKey}?apikey=${API}&getphotos=true`
  );
  await dispatch({ type: "GET_CURRENT_WEATHER", payload: response.data[0] });
};

export const getDailyForecasts = (locationKey) => async (dispatch) => {
  const response = await axios.get(
    `${URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API}&metric=true`
  );
  await dispatch({
    type: "GET_DAILY_FORECASTS",
    payload: response.data.DailyForecasts,
  });
};
