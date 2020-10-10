import React, { Component } from 'react'
import hands from '../static/images/hands.png';
import {Link} from "react-router-dom";

import '../index.css';

export default class TokenValidation extends Component {
     constructor(props) {
        super(props)
        this.state = {
             email: '',
              otp: '', 
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.confirmPatient = this.confirmPatient.bind(this);
      
    }

         handleInputChange(ev) {
        const target = ev.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
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
    <h5 className="access">Verify <span className="accessb">Code</span> </h5>
      <hr/>
    <form  onSubmit={this.confirmPatient}>
      <div className="form-group my-4 ">
          <small className="text-muted access">Verification Code</small>
          <input type="text" className="form-control  rounded-pill" name="otp" value={this.state.otp} onChange={this.handleInputChange}  placeholder="" required/>
       </div>
       <button className="btn text-white btn-outline-pink accent-4 btn-sm rounded-pill" >
            verify <span className="badge badge-primary "></span>
    </button>

    </form>
       
    </div>
    <div className="card-footer text-muted info-color white-text">
      <Link to="/" className="btn text-white btn-outline-white accent-4 btn-sm rounded-pill">Resend Code?</Link>
    </div>
    </div>
    <div className="col-sm-4"></div>
  </div>
 </div>
        )
    }
}
