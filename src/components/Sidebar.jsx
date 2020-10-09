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

import {Link} from "react-router-dom";
import '../index.css';

export const mainListItems = (
  <div className="wrapper stylish-color-dark">
  
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Sunx Access</div>
      </a>

      
      <hr class="sidebar-divider my-0"/>
      
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

     <li class="nav-item active">
        <Link class="nav-link" href="#">
          <i class="fas fa-money-bill    "></i>
          <span>Payments</span></Link >
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="index.html">
         <i class="fas fa-address-book    "></i>
          <span>Appointments</span></a>
       </li>
  
      <hr class="sidebar-divider"/>

      <div class="sidebar-heading">
        Interface
      </div>

      
      <li class="nav-item">
        <Link class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </Link>
        <div id="collapseTwo" class="collapse " aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded stylish-color-dark">
            <h6 class="collapse-header text-white">Custom Components:</h6>
            <a class="collapse-item text-white" href="buttons.html">Buttons</a>
            <a class="collapse-item text-white" href="cards.html">Cards</a>
          </div>
        </div>
      </li>

     
      <li class="nav-item">
        <Link class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Profile</span>
        </Link>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded stylish-color-dark">
            <h6 class="collapse-header text-info">Manage Account:</h6>
            <hr class="sidebar-divider"/>
            <a class="collapse-item text-white" href="utilities-color.html">Update Bio data</a>
            <a class="collapse-item text-white" href="utilities-border.html">Vital Signs</a>
            <a class="collapse-item text-white" href="utilities-animation.html">Change Password</a>
            <a class="collapse-item text-white" href="utilities-other.html">References</a>
          </div>
        </div>
      </li>

      
      <hr class="sidebar-divider"/>

    
      <div class="sidebar-heading">
        Addons
      </div>

    
      <li class="nav-item">
        <Link class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </Link>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="login.html">Login</a>
            <a class="collapse-item" href="register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">404 Page</a>
            <a class="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>

     
      <li class="nav-item">
        <Link class="nav-link" href="#">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span></Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" href="#">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span></Link>
      </li>

      
      <hr class="sidebar-divider d-none d-md-block"/>

      
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>


</ul>


   
  </div>
);

export const secondaryListItems = (
  <div className="MuiTypography-root cMJjnA">
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
