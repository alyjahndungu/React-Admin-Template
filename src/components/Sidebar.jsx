import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PagesRoundedIcon from '@material-ui/icons/PagesRounded';
import PaymentIcon from '@material-ui/icons/Payment';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Badge from '@material-ui/core/Badge';
import HotelIcon from '@material-ui/icons/Hotel';

import '../index.css';

export const mainListItems = (
  <div class="MuiTypography-root sc-fzqAbL sc-fzpkqZ cMJjnA MuiTypography-body1">

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
     <ListItemText  primary="Dashboard" />

     
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText primary="Doctors" />
    </ListItem>

        <ListItem button>
      <ListItemIcon>
        <PagesRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Appointments" />
        <Badge badgeContent={2} color="primary"/>
    </ListItem>
 
    <ListItem button>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Payments" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DirectionsRunIcon />
      </ListItemIcon>
      <ListItemText primary="Emergency" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HotelIcon />
      </ListItemIcon>
      <ListItemText primary="Admissions" />
    </ListItem>


   
  </div>
);

export const secondaryListItems = (
  <div className="mainListItems">
    <ListSubheader inset>Manage Account</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Change Password" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Update Infomation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
         <Badge badgeContent={6} color="primary"/>
    </ListItem>
  </div>
);
