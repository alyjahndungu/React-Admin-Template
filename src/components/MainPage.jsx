import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
export default class MainPage extends Component {

    render() {
        
        return (

 <div>  
<nav className="mb-1 navbar navbar-expand-lg navbar-dark unique-color-dark">
  <Link className="navbar-brand" href="#"><Avatar alt="Remy" src="static/images/hands-5482892_1280.png" /></Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Pricing</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Dropdown
        </Link>
        <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
          <Link className="dropdown-item" href="#">Action</Link>
          <Link className="dropdown-item" href="#">Another action</Link>
          <Link className="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item">
        <Link className="nav-link waves-effect waves-light">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link waves-effect waves-light">
          <i className="fab fa-google-plus-g"></i>
        </Link>
      </li>
      <li class="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user"></i>
        </Link>
        <div className="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
          <Link class="dropdown-item" href="#">Action</Link>
          <Link class="dropdown-item" href="#">Another action</Link>
          <Link className="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
         
            <div  className="container-fluid">
                <div className="row">
                    <div className="col-md-2 success-color">
                

                    </div>
                    <div className="col-md-10 secondary-color">
                    <h6>content</h6>
                    </div>
                </div>
            </div>
             </div>
        )
    }
}
