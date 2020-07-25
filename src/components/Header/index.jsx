import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, convertUnits } from "../../store/actions/index";
import SearchInput from "../search";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Badge,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreIcon from "@material-ui/icons/MoreVert";
import BrightnessIcon from '@material-ui/icons/BrightnessMedium';
import HomeIcon from '@material-ui/icons/Home';

import { useStyles } from "./style";

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const favorites = useSelector((state) => state.favoritesData);
  const tempConverter = useSelector((state) => state.tempConverter);
  const dispatch = useDispatch();

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton 
        onClick={() => dispatch(toggleDarkMode())}aria-label="dark-toggle" color="inherit">
          <BrightnessIcon style={{color:"#d50000"}} fontSize="inherit"  />
        </IconButton>
        <IconButton
          aria-label="convert-units"
          style={{color:"#d50000"}}
          onClick={(e) => dispatch(convertUnits())}
        >
          <div className={classes.unitIcon}>
            {tempConverter ? "\xB0C" : "\xB0F"}
          </div>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="favorites" color="inherit">
          <Badge badgeContent={favorites.length} color="error">
            <Link to="/favorites">
              <FavoriteIcon style={{color:"#d50000"}} fontSize="inherit" />
            </Link>
          </Badge>
        </IconButton>
        <IconButton
              aria-label="back-button"
              color="inherit"
            >
              <Link to="/">
              <HomeIcon style={{color:"#d50000"}} fontSize="inherit"/>
              </Link>
            </IconButton>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            <Link to="/" style={{color:"#d50000"}}>Weather App</Link>
          </Typography>
          <SearchInput />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="dark-toggle"
              onClick={(e) => dispatch(toggleDarkMode())}
            >
              <BrightnessIcon style={{color:"#d50000"}}fontSize="inherit"/>
            </IconButton>
            <IconButton
              aria-label="convert-units"
              style={{color:"#d50000"}}
              onClick={(e) => dispatch(convertUnits())}
            >
              <div className={classes.unitIcon}>
                {tempConverter ? "\xB0C" : "\xB0F"}
              </div>
            </IconButton>
            <IconButton aria-label="favorites" color="inherit">
              <Link to="/favorites">
                <Badge badgeContent={favorites.length} color="error">
                  <FavoriteIcon
                  style={{color:"#d50000"}}
                   fontSize="inherit"/>
                </Badge>
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{color:"#d50000"}}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
