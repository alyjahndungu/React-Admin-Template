import React, { Component } from 'react'

import {Link} from "react-router-dom";


export default class Login extends Component {
    render() {

        return (
    <div className="container-fluid">
    <div className="row">

    <div className="col-sm-4"></div>
    <div className="col-sm-4">
     <div class=" card-header info-color white-text">
      TERNSTONE FINANCE
    </div>
    <div class="card-body border border-info rounded mb-0 p-5 wow rotateIn">
    <h4 class="card-title">Sign in</h4>
      <hr/>
    <form action="" method="post">
    <div class="form-group">
      <small  className="text-muted">Username</small>
      <input type="text" name=""  className="form-control rounded-pill" placeholder=""/>
    </div>

    <div class="form-group my-4 ">
      <small className="text-muted">Password</small>
      <input type="password" className="form-control rounded-pill" name=""  placeholder=""/>
    </div>
    
       <button className="btn rounded-pill btn-success" >
            sign in <span className="badge badge-primary "></span>
    </button>

    <Link to="/Dashboard" className="btn btn-info btn-sm">sign in test button</Link>
    </form>
       <Link to="/Register" className="btn btn-info btn-sm">Create an Account?</Link>
    </div>
    <div class="card-footer text-muted info-color white-text">
      <p class="mb-0">Your leading finance provider</p>
    </div>
    </div>
    <div className="col-sm-4"></div>

  </div>

 

            </div>
        )
    }
}
