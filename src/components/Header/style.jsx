import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    margin: '10px',
    background: 'linear-gradient(45deg, #b3e5fc 30%, #039be5 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    position: "static",
    color: "red",
    opacity: '0.8'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  unitIcon: {
    fontWeight: 500,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    letterSpacing: 1.15,
  },
}));

export { useStyles };


