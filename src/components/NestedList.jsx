import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom";
import StarBorder from '@material-ui/icons/StarBorder';
import BuildIcon from '@material-ui/icons/Build';

import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
const [open1, setOpen1] = React.useState(true);
const [open2, setOpen2] = React.useState(true);
  const handleClick1 = () => {
    setOpen(!open);
  };

   const handleClick2 = () => {
    setOpen1(!open1);
  };

   const handleClick3 = () => {
    setOpen2(!open2);
  };

  return (
      <div >
    <List
      component="nav" 
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Sunx Access
        </ListSubheader>
      }
      className="stylish-color-dark text-white"
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon className="text-white" />
        </ListItemIcon>
         <Link className="nav-link text-white" to="#">
          <span>Dashboard</span></Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon  className="text-white"/>
        </ListItemIcon>
     <Link className="nav-link text-white" to="#">
          <span>Dashboard</span></Link>
      </ListItem>
      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <EcoIcon className="text-white" />
        </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Services</span></Link>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className="text-white"/>
            </ListItemIcon>
              <Link className="nav-link text-white" to="#">
          <span>Services1</span></Link>
          </ListItem>

            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className="text-white" />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Services2</span></Link>
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Services3</span></Link>
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Services</span></Link>
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Services</span></Link>
          </ListItem>
        </List>
      </Collapse>



  <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <BuildIcon  className="text-white"/>
        </ListItemIcon>
        <Link className="nav-link text-white" to="#">
          <span>Login Screens</span></Link>
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link className="nav-link text-white" to="#">
          <span>Login</span></Link>
          </ListItem>

            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link className="nav-link text-white" to="#">
          <span>Register</span></Link>
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link className="nav-link text-white" to="#">
          <span>Forgot Password</span></Link>
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link className="nav-link text-white" to="#">
          <span>Logout</span></Link>
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
           <Link className="nav-link text-white" to="#">
          <span>Dashboard</span></Link>
     
          </ListItem>
        </List>
      </Collapse>


        <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
       <Link className="nav-link text-white" to="#">
          <span>Profile</span></Link>  
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Update Bio data</span></Link>  
          </ListItem>

            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Update Vital Signs</span></Link>  
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Change Password</span></Link>  
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>References</span></Link>  
          </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
             <Link className="nav-link text-white" to="#">
          <span>Logout</span></Link>  
          </ListItem>
        </List>
      </Collapse>  
    </List>

    </div>
  );
}
