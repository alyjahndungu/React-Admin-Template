import React, { Component } from 'react'

import {Link} from "react-router-dom";
import hands from '../static/images/hands.png';

import '../index.css';


export default class FacilityRegister extends Component {

       constructor(props) {
        super(props)
        this.state = {
           legal_name: '',
           reg_no: '',
           username: '',
           company_phone: '',
           email: '',
           contact_person_fname: '',
           contact_person_lname: '',
           contact_person_phone: '',
           location: '',
           password: '',
            isLoading:false
            
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveNewFacility = this.saveNewFacility.bind(this);
      
    }

      handleInputChange(ev) {
        const target = ev.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }


  saveNewFacility = (event) => {
        event.preventDefault();   
           let facility = {
            legal_name: this.state.legal_name,
            reg_no: this.state.reg_no,
            username: this.state.username,
            company_phone: this.state.company_phone,
            email: this.state.email,
            contact_person_fname: this.state.contact_person_fname,
            contact_person_lname : this.state.contact_person_lname,
            contact_person_phone: this.state.contact_person_phone,
            location: this.state.location,
            password: this.state.password

        }
          console.log(JSON.stringify(facility));
    
    
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
  
       <h5 className="access">Create  <span className="accessb">-Facility-</span> Account</h5>
      
      <hr/>
        <form onSubmit={this.saveNewFacility}>
                    <div className="form-group  ">
                      <small className="text-muted">Company Legal Name</small>
                      <input type="text" name="legalname" value={this.state.legalname} onChange={this.handleInputChange}  className="form-control rounded-pill" placeholder="" required/>
                    </div>
                      <div className="form-group">
                      <small className="text-muted">Company Registration No:</small>
                      <input type="text" name="reg_no" value={this.state.reg_no} onChange={this.handleInputChange}  className="form-control rounded-pill" placeholder="" required/>
                    </div>

                    <div className="form-group">
                      <small className="form-text text-muted">Username</small>
                      <input type="text" name="username" className="form-control rounded-pill" value={this.state.username} onChange={this.handleInputChange}  placeholder="" required/>
                    </div>

                       <div className="form-group">
                      <small className="text-muted">Company Phone No:</small>
                      <input type="text" name="company_phone" value={this.state.company_phone} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
                    </div>

                        <div className="form-group">
                      <small className="text-muted">Company Email Address</small>
                      <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
                    </div>

                        <div className="form-group">
                      <small className="text-muted">Contact Person - Firstname</small>
                      <input type="text" name="contact_person_fname" value={this.state.contact_person_fname} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
                    </div>

                   <div className="form-group">
                      <small className="text-muted">Contact Person - Lastname</small>
                      <input type="text" name="contact_person_lname" value={this.state.contact_person_lname} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
                    </div>

                  <div className="form-group">
                      <small className="text-muted">Contact Person - Phone No:</small>
                      <input type="text" name="contact_person_phone" value={this.state.contact_person_phone} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
                    </div>

                      <div className="form-group">
                      <small className="text-muted">Company Location</small>
                      <input type="text" name="location" value={this.state.location} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
                    </div>

                    <div className="form-group">
                     <small className="text-muted">Password</small>
                      <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}  className="form-control rounded-pill" required id="" placeholder=""/>
                    </div>

                      <button type="submit" className="btn btn-outline-pink accent-4 btn-sm rounded-pill">
                         sign up <span className="badge badge-primary "></span>
                         </button>
      
                </form>
      
    </div>
    <div className="card-footer text-muted info-color white-text">
      <Link to="/Login" className="btn btn-outline-white accent-4 btn-sm rounded-pill btn-sm">Have an Account?</Link>
    </div>
  
                </div>
                <div className="col-sm-4"></div>
            </div>
            
            </div>
        )
    }
}
