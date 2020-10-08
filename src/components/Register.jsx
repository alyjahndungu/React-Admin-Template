import React, { Component } from 'react'
import {Link} from "react-router-dom";


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
            <div class="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4" >
                
    <div class=" card-header info-color white-text">
      TERNSTONE FINANCE
    </div>
    <div class="card-body border border-info rounded mb-0 p-5 wow rotateIn">
      <h4 class="card-title">Create Account</h4>
      <hr/>
        <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <small class="text-muted">Firstname</small>
                      <input type="text" name="firstname" value={this.state.name} onChange={this.handleInputChange}  class="form-control rounded-pill" placeholder=""/>
                    </div>

                      <div class="form-group">
                      <small class="text-muted">Lastname</small>
                      <input type="text" name="lastname" value={this.state.name} onChange={this.handleInputChange}  class="form-control rounded-pill" placeholder=""/>
                    </div>

                      <div class="form-group">
                      <small class="text-muted">Username</small>
                      <input type="text" name="username" value={this.state.name} onChange={this.handleInputChange}  class="form-control rounded-pill" placeholder=""/>
                    </div>

                    <div class="form-group">
                      <small class="form-text text-muted">Email Address</small>
                      <input type="email" name="email" class="form-control rounded-pill" value={this.state.name} onChange={this.handleInputChange}  placeholder=""/>
                    </div>

                       <div class="form-group">
                      <small class="text-muted">Phone Number</small>
                      <input type="text" name="phoneno" value={this.state.name} onChange={this.handleInputChange} class="form-control rounded-pill" placeholder=""/>
                    </div>

                    <div class="form-group">
                     <small class="text-muted">Password</small>
                      <input type="password" name="password" value={this.state.name} onChange={this.handleInputChange}  class="form-control rounded-pill" name="" id="" placeholder=""/>
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
