import React from 'react';
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

     <li class="nav-item">
        <Link class="nav-link" href="#">
          <i class="fas fa-money-bill    "></i>
          <span>Payments</span></Link >
      </li>

      <li class="nav-item ">
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
          <span>Services</span>
        </Link>
        <div id="collapseTwo" class="collapse " aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded stylish-color-dark">
            <h6 class="collapse-header grey-text lighten-1">Request Service:</h6>
            <hr class="sidebar-divider"/>
            <a class="collapse-item grey-text lighten-5" href="buttons.html">Book Appointment</a>
            <a class="collapse-item text-white" href="cards.html">Search Doctors</a>
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
            <h6 class="collapse-header grey-text lighten-1">Manage Account:</h6>
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
          <span>Login Screens</span>
        </Link>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="   py-2 collapse-inner rounded">
            <h6 class="collapse-header grey-text lighten-1">Pages:</h6>
             <hr class="sidebar-divider"/>
            <a class="collapse-item text-white" href="login.html">Login</a>
            <a class="collapse-item text-white " href="register.html">Register</a>
            <a class="collapse-item text-white  " href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
          </div>
        </div>
      </li>

     
      <li class="nav-item">
        <Link class="nav-link" href="#">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Reports</span></Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" href="#">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span></Link>
      </li>
      <hr class="sidebar-divider d-none d-md-block"/>
</ul>
 
  </div>
);
