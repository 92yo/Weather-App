import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loader: {
    marginLeft: '50%',
    marginTop: '30%'
  },
  favoriteList: {
    marginLeft: '15px'
  },
  favoriteIcon: {
    color: '#f44336',
  }
}));

export { useStyles };


