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
        <IconButton aria-label="dark-toggle" color="inherit">
          <BrightnessIcon onClick={(e) => dispatch(toggleDarkMode())} />
        </IconButton>
        <IconButton
          aria-label="convert-units"
          color="inherit"
          onClick={(e) => dispatch(convertUnits())}
        >
          <div className={classes.unitIcon}>
            {tempConverter ? "\xB0C" : "\xB0F"}
          </div>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="favorites" color="inherit">
          <Badge badgeContent={favorites.length} color="secondary">
            <Link to="/favorites">
              <FavoriteIcon />
            </Link>
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            <Link to="/">Weather App</Link>
          </Typography>
          <SearchInput />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="dark-toggle"
              color="inherit"
              onClick={(e) => dispatch(toggleDarkMode())}
            >
              <BrightnessIcon />
            </IconButton>
            <IconButton
              aria-label="convert-units"
              color="inherit"
              onClick={(e) => dispatch(convertUnits())}
            >
              <div className={classes.unitIcon}>
                {tempConverter ? "\xB0C" : "\xB0F"}
              </div>
            </IconButton>
            <IconButton aria-label="favorites" color="inherit">
              <Link to="/favorites">
                <Badge badgeContent={favorites.length} color="secondary">
                  <FavoriteIcon />
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
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
