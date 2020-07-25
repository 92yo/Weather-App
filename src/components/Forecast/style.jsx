import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",    
  },
  favoriteIcon:{
    fontSize: 35,
    color: '#f44336'
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  weatherList: {
    marginTop: '10%',
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  weatherItem:{
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '1.6rem',
    flexBasis: '15%',
    fontWeight: 'bolder',
  },
  weatherDay:{
    fontWeight: 'bolder',
  }

}));

export { useStyles };
