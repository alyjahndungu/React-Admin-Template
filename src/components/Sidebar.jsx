import React from 'react';
import {Link} from "react-router-dom";
import '../index.css';



export const mainListItems = (
  <div className="wrapper stylish-color-dark">
  
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Sunx Access</div>
      </a>

    
      <hr className="sidebar-divider my-0"/>
      
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

     <li className="nav-item">
        <Link className="nav-link" to="#">
          <i className="fas fa-money-bill    "></i>
          <span>Payments</span></Link >
      </li>

      <li className="nav-item ">
        <a className="nav-link" href="index.html">
         <i className="fas fa-address-book    "></i>
          <span>Appointments</span></a>
       </li>
  
      <hr className="sidebar-divider"/>

      <div className="sidebar-heading">
        Interface
      </div>

      
      <li className="nav-item">
        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog"></i>
          <span>Services</span>
        </Link>
        <div id="collapseTwo" className="collapse " aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded stylish-color-dark">
            <h6 className="collapse-header grey-text lighten-1">Request Service:</h6>
            <hr className="sidebar-divider"/>
            <a className="collapse-item grey-text lighten-5" href="buttons.html">Book Appointment</a>
            <a className="collapse-item text-white" href="cards.html">Search Doctors</a>
          </div>
        </div>
      </li>

     
      <li className="nav-item">
        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Profile</span>
        </Link>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded stylish-color-dark">
            <h6 className="collapse-header grey-text lighten-1">Manage Account:</h6>
            <hr className="sidebar-divider"/>
            <a className="collapse-item text-white" href="utilities-color.html">Update Bio data</a>
            <a className="collapse-item text-white" href="utilities-border.html">Vital Signs</a>
            <a className="collapse-item text-white" href="utilities-animation.html">Change Password</a>
            <a className="collapse-item text-white" href="utilities-other.html">References</a>
          </div>
        </div>
      </li>
      
      <hr className="sidebar-divider"/>

    
      <div className="sidebar-heading">
        Addons
      </div>

    
      <li className="nav-item">
        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder"></i>
          <span>Login Screens</span>
        </Link>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div className="   py-2 collapse-inner rounded">
            <h6 className="collapse-header grey-text lighten-1">Pages:</h6>
             <hr className="sidebar-divider"/>
            <a className="collapse-item text-white" href="login.html">Login</a>
            <a className="collapse-item text-white " href="register.html">Register</a>
            <a className="collapse-item text-white  " href="forgot-password.html">Forgot Password</a>
            <div className="collapse-divider"></div>
          </div>
        </div>
      </li>

     
      <li className="nav-item">
        <Link className="nav-link" to="#">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Reports</span></Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="#">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span></Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block"/>

     
</ul>
 
      
  </div>
);
