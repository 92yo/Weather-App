import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../store/actions/index";
import axios from "axios";
import { converter } from "../../helpers/converter";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {CircularProgress, CardHeader, IconButton } from "@material-ui/core"
import { useStyles } from "./style";

const API = process.env.REACT_APP_API;
const URL = process.env.REACT_APP_URL;

function Favorites() {
  const classes = useStyles();

  const favorites = useSelector((state) => state.favoritesData);
  const tempConverter = useSelector((state) => state.tempConverter);
  const dispatch = useDispatch();

  const [favs, setFav] = useState([]);
  const [isFetching, setFetch] = useState(true);

  useEffect(() => {
    fetchFavorites();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFavorites = async () => {
    setFetch(true);
    const tempFavorites = {};
    for await (let favorite of favorites) {
      const response = await axios.get(
        `${URL}/currentconditions/v1/${favorite.id}?apikey=${API}&getphotos=true`
      );
      tempFavorites[favorite.id] = response.data[0];
    }
    setFav(tempFavorites);
    await setFetch(false);
  };

  if (isFetching) {
    return <div className={classes.loader}> <CircularProgress />
    </div>;
  }

  return (
    <div className={classes.root}>
      {favorites.map((favorite, index) => (
        <div key={index}>
          <CardHeader title={favorite.name} subheader={favs[favorite.id].WeatherText} 
           subheaderTypographyProps={{variant: 'h5', color: 'black'}}
           titleTypographyProps={{variant:'h4' }}
           />
          <div className={classes.favoriteList}>
            {tempConverter
              ? `${favs[favorite.id].Temperature.Metric.Value}\xB0C`
              : converter(favs[favorite.id].Temperature.Metric.Value)}
          </div>
          <IconButton aria-label="remove from favorites" onClick={() =>
                dispatch(removeFavorite(favorite.id))
              }>
            <FavoriteIcon
            className={classes.favoriteIcon}
            />
          </IconButton>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
