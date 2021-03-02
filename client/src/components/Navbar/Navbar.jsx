import React from 'react';
import axios from "axios";
import clsx from 'clsx';
import { Link } from 'react-router-dom'
import { Avatar, AppBar, CssBaseline, Divider, Drawer, List, makeStyles, useTheme, Toolbar, Typography } from '@material-ui/core';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FilterVintageRoundedIcon from '@material-ui/icons/FilterVintageRounded';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PeopleIcon from '@material-ui/icons/People';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import logo from "../../images/igLogo4.png";

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex' },
  appBar: { zIndex: theme.zIndex.drawer + 1, 
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 30,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        className={clsx(classes.appBar, {[classes.appBarShift]: open})}
        position="fixed"
      >
        <Toolbar 
          className="styleBar" 
          style={{ backgroundImage: "linear-gradient(30DEG, #017c74, #7cc9c3, #ef785a, #febdc3, #f5c24c, #fcea64)", height: "68px" }}
        >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >

        <MenuIcon />

        </IconButton>
          <Typography variant="h6" noWrap>
            <img src={logo} alt="Island Guru logo" className={classes.logo} style={{ width: "100%",  marginTop: "50px" }}/>
          </Typography>

        </Toolbar>

      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        style={{background: '#88c9a1'}}
      >

      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>

      <Divider />

      <List>
        {['Login', 'Register', 'Home', 'Items', 'Flowers', 'Villagers', 'Favorites', 'Logout'].map((text, index) => (
          <Link to={`/${text.toLowerCase()}`} key={index} style={{ color: '#017c74', textDecoration: 'none', fontWeight: "bold" }}>

            <ListItem button style={{ paddingLeft: "18px", paddingRight: "23px" }}>

            <ListItemIcon>
              <Avatar style={{background: "#EDEDED", boxShadow: "1px 3px 1px #9E9E9E"}}>
                {index === 0 && <AccountCircleIcon        key={"login"}     style={{color: '#786951'}} />}
                {index === 1 && <PersonAddRoundedIcon     key={"register"}  style={{color: '#017c74'}} />}
                {index === 2 && <HomeIcon                 key={"home"}      style={{color: '#7cc9c3'}} />}
                {index === 3 && <CategoryIcon             key={"items"}     style={{color: '#ef785a'}} />}
                {index === 4 && <FilterVintageRoundedIcon key={"flowers"}   style={{color: '#febdc3'}} />}
                {index === 5 && <PeopleIcon               key={"villagers"} style={{color: '#f5c24c'}} />}
                {index === 6 && <ThumbUpAltRoundedIcon    key={"favorites"} style={{color: '#017c74'}} />}
                {index === 7 && <ExitToAppIcon            key={"exit"}      style={{color: '#786951', transform: "rotate(96)" }}
                onClick={async() => {await axios.get('/logout')}} />}
              </Avatar>

            </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>

          </Link>
        ))}
      </List>

      </Drawer>

    </div>
  );
}
