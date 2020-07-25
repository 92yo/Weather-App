import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/actions/index";
import { converter } from "../../helpers/converter";

import { CardHeader, CardActions, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { useStyles } from "./style";

export default function Forecast() {
  const classes = useStyles();

  const dailyForecasts = useSelector((state) => state.weather.forecasts);
  const currentWeather = useSelector((state) => state.weather.current);
  const location = useSelector((state) => state.location);
  const favorites = useSelector((state) => state.favoritesData);
  const tempConverter = useSelector((state) => state.tempConverter);
  const dispatch = useDispatch();
  const isDayTime = currentWeather.IsDayTime ? "Day" : "Night";

  return (
    <div className={classes.root}>
      <CardHeader
        style={{ marginTop: "5%"}}
        title={location.cityName}
        titleTypographyProps={{ variant: "h4" }}
        subheaderTypographyProps={{ variant: "h5", color: 'inherit'}}
        subheader= {`${currentWeather.Temperature.Metric.Value}\xB0C`} 
        avatar={
          <CardActions disableSpacing>
            {favorites.some(({ id }) => id === location.key) ? (
              <IconButton
                onClick={() =>
                  dispatch(removeFavorite(location.key, location.cityName))
                }
                aria-label="remove from favorites"
              >
                <FavoriteIcon className={classes.favoriteIcon} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() =>
                  dispatch(addFavorite(location.key, location.cityName))
                }
                aria-label="add to favorites"
              >
                <FavoriteBorderIcon className={classes.favoriteIcon} />
              </IconButton>
            )}
          </CardActions>
        }
      />

      <div className={classes.weatherList}>
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className={classes.weatherItem}>
            <p className={classes.weatherDay}>
              {moment(forecast.Date).format("ddd")}
            </p>
            <p>
              <i className={`wi icon-accu${forecast[isDayTime].Icon}`}></i>
            </p>
            <p>
              {tempConverter
                ? `${forecast.Temperature.Minimum.Value}\xB0C - ${forecast.Temperature.Maximum.Value}\xB0C`
                : converter(
                    forecast.Temperature.Minimum.Value,
                    forecast.Temperature.Maximum.Value
                  )}
            </p>
            <p>{forecast[isDayTime].IconPhrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
