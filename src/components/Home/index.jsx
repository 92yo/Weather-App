import React from "react";
import Forecast from "../Forecast";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./style";

const Home = () => {
  const classes = useStyles();
  
  const isLoading = useSelector((state) => state.isLoading);
  if (isLoading) return <CircularProgress className={classes.loader} />;
  return (
    <>
      <Forecast />
    </>
  );
};

export default Home;
