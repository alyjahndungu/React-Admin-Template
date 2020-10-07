import React, { Component } from 'react'
import {Link} from "react-router-dom";


export default class Register extends Component {
    render() {
        return (
            <div className="App container-fluid">
            <div class="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4" >
                
    <div class=" card-header info-color white-text">
      TERNSTONE FINANCE
    </div>
    <div class="card-body border border-info rounded mb-0 p-5 wow rotateIn">
      <h4 class="card-title">Create Account</h4>
      <hr/>
        <form action="" method="post">
                    <div class="form-group">
                      <small class="text-muted">Firstname</small>
                      <input type="text" name="" class="form-control rounded-pill" placeholder=""/>
                    </div>

                      <div class="form-group">
                      <small class="text-muted">Lastname</small>
                      <input type="text" name="" class="form-control rounded-pill" placeholder=""/>
                    </div>

                      <div class="form-group">
                      <small class="text-muted">Username</small>
                      <input type="text" name="" class="form-control rounded-pill" placeholder=""/>
                    </div>

                    <div class="form-group">
                      <small class="form-text text-muted">Email Address</small>
                      <input type="email" class="form-control rounded-pill" name="" placeholder=""/>
                    </div>

                       <div class="form-group">
                      <small class="text-muted">Phone Number</small>
                      <input type="text" name="" class="form-control rounded-pill" placeholder=""/>
                    </div>

                    <div class="form-group">
                     <small class="text-muted">Password</small>
                      <input type="password" class="form-control rounded-pill" name="" id="" placeholder=""/>
                    </div>

                      <button type="submit"  className="btn rounded-pill btn-success">
                         sign up <span className="badge badge-primary "></span>
                         </button>

                </form>
      <Link to="/Login" className="btn btn-info btn-sm">Have an Account?</Link>
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
