import React, { Component } from 'react'
import {Link} from "react-router-dom";
import hands from '../static/images/hands.png';
import '../index.css';

export default class Register extends Component {
      constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            phoneno: '',
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

  handleSubmit(event) {
        event.preventDefault();   

        ///const signUpRequest = Object.assign({}, this.state);

      // //  signup(signUpRequest)
      //   .then(response => {
      //       Alert.success("You're successfully registered. Please login to continue!");
      //       this.props.history.push("/login");
      //   }).catch(error => {
      //       Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
      //   });
    }

    render() {
        return (
            <div className="App container-fluid">
            <div className="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4" >
                
    <div className=" card-header info-color mb-2 white-text">
      <h3 className="access">Sunx<span className="accessb">Access</span> </h3>
    </div>
    <div className="card-body border border-info rounded mb-2 p-4 wow rotateIn">
     <img src={hands} className="logo" alt="logo" />
  
       <h5 className="access">Create  <span className="accessb">- Doctor-</span> Account</h5>
      
      <hr/>
        <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <small className="text-muted">Firstname</small>
                      <input type="text" name="firstname" value={this.state.name} onChange={this.handleInputChange}  className="form-control rounded-pill" placeholder="" required/>
                    </div>

                      <div className="form-group">
                      <small className="text-muted">Lastname</small>
                      <input type="text" name="lastname" value={this.state.name} onChange={this.handleInputChange}  className="form-control rounded-pill" placeholder="" required/>
                    </div>

                      <div className="form-group">
                      <small className="text-muted">Username</small>
                      <input type="text" name="username" value={this.state.name} onChange={this.handleInputChange}  className="form-control rounded-pill" placeholder="" required/>
                    </div>

                    <div className="form-group">
                      <small className="form-text text-muted">Email Address</small>
                      <input type="email" name="email" className="form-control rounded-pill" value={this.state.name} onChange={this.handleInputChange}  placeholder="" required/>
                    </div>

                       <div className="form-group">
                      <small className="text-muted">Phone Number</small>
                      <input type="text" name="phoneno" value={this.state.name} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
                    </div>

                    <div className="form-group">
                     <small className="text-muted">Password</small>
                      <input type="password" name="password" value={this.state.name} onChange={this.handleInputChange}  className="form-control rounded-pill" required id="" placeholder=""/>
                    </div>

                      <button type="submit"  className="btn btn-outline-pink accent-4 btn-sm rounded-pill">
                         sign up <span className="badge badge-primary "></span>
                         </button>

                </form>
      
    </div>
    <div className="card-footer text-muted info-color white-text">
      <Link to="/TokenValidation" className="btn btn-outline-white accent-4 btn-sm rounded-pill btn-sm">Have an Account?</Link>
    </div>
  
                </div>
                <div className="col-sm-4"></div>
            </div>
            
            </div>
        )
    }
}
