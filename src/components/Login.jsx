import React, { Component } from 'react'
import hands from '../static/images/hands.png';
import {Link} from "react-router-dom";


import '../index.css';

export default class Login extends Component {

   constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }
  

  componentDidUpdate() {
    // If user has logged in successfully, go to dashboard
      this.props.history.push('/Dashboard');
    
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  login() {
    this.props.login(this.state.username, this.state.password);
  }

    render() {

        return (
    <div className="container-fluid">
    <div className="row">

    <div className="col-sm-4"></div>
    <div className="col-sm-4 assn">
     <div className=" card-header info-color mb-1  white-text">
    <h3 className="access">Sunx<span className="accessb">Access</span> </h3>
    </div>

    <div className="card-body border border-info rounded mb-1 p-5 grey lighten-5">
    <img src={hands} className="logo" alt="logo" />
   
       <h5 className="access">Sign  <span className="accessb">-in-</span> </h5>
      <hr/>
    <form>
    <div className="form-group">
      <small  className="text-muted access">Username</small>
      <input type="email" name="username" value={this.state.username} className="form-control rounded-pill"  onChange={this.handleChange} placeholder="" required/>
    </div>

    <div className="form-group my-4 ">
      <small className="text-muted access">Password</small>
      <input type="password" className="form-control   rounded-pill" name="password" value={this.state.password} onChange={this.handleChange} placeholder="" required/>
    </div>
    
       <button  onClick={() => this.login()} className="btn text-white btn-outline-pink accent-4 btn-sm rounded-pill" >
            sign in <span className="badge badge-primary "></span>
    </button>

    <Link to="/Dashboard" className="btn btn-info btn-sm">sign in test button</Link>
    </form>
       
    </div>
    <div className="card-footer text-muted info-color white-text">
      <Link to="/Register" className="btn text-white btn-outline-white accent-4 btn-sm rounded-pill">Create an Account?</Link>
    </div>
    </div>
    <div className="col-sm-4"></div>
  </div>
 </div>
        )
    }
}
