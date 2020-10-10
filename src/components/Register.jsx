import React, { Component } from 'react'
import {Link} from "react-router-dom";
import hands from '../static/images/hands.png';

import PatientService from "../services/PatientService";
import '../index.css';



export default class Register extends Component {
   constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
             email: '',
            phoneno: '',
            password: '',
            isLoading:false
            
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveUserPatient = this.saveUserPatient.bind(this);
      
    }

      componentDidMount(){
     
            this.setState({
                isLoading:true
            })

    }

      handleInputChange(ev) {
        const target = ev.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

  saveUserPatient = (event) => {
        event.preventDefault();   
           let patient = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phoneno: this.state.phoneno,
            password: this.state.password

            
        }
          console.log(JSON.stringify(patient));
         

    PatientService.createPatient(patient)
            .then(response => {

      if (response.status === 200) {
   
           console.log(response)

    // this.props.history.push({
    //   pathname:'/TokenValidation',
    //   state:{email:this.state.email}
    // })
  }else{
    this.setState({message : 'User added successfully.'});
                this.props.history.push('/savePatient');

  }
                
            });


  //  fetch("http://localhost:8000/api/v1/patient", {
  //           method: "POST",
  //           headers: {
  //               "content-type": "application/json",
  //           },
  //           body: JSON.stringify(patient),


  //       })
  //       .then(response => response.json()
        
  //       );
        
  //       window.location.reload();

                  
//  window.location.reload();


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
  
       <h5 className="access">Create  <span className="accessb">-Patient-</span> Account</h5>
      
      <hr/>
        <form onSubmit={this.saveUserPatient}>
                    <div className="form-group  ">
                      <small className="text-muted">Firstname</small>
                      <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleInputChange}  className="form-control rounded-pill" placeholder="" required/>
                    </div>
                      <div className="form-group">
                      <small className="text-muted">Lastname</small>
                      <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleInputChange}  className="form-control rounded-pill" placeholder="" required/>
                    </div>

                    <div className="form-group">
                      <small className="form-text text-muted">Email Address</small>
                      <input type="email" name="email" className="form-control rounded-pill" value={this.state.email} onChange={this.handleInputChange}  placeholder="" required/>
                    </div>

                       <div className="form-group">
                      <small className="text-muted">Phone Number</small>
                      <input type="text" name="phoneno" value={this.state.phoneno} onChange={this.handleInputChange} className="form-control rounded-pill" placeholder="" required/>
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
      <Link to="/TokenValidation" className="btn btn-outline-white accent-4 btn-sm rounded-pill btn-sm">Have an Account?</Link>
    </div>
  
                </div>
                <div className="col-sm-4"></div>
            </div>
            
            </div>
        )
    }
}
