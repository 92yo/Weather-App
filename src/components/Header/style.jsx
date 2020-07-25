import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    margin: '5px',
    background: 'transparent',
    boxShadow: 'none',
    position: "static",
    color: "red"
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


