import React, { Component } from 'react'
import {Link} from "react-router-dom";
import hands from '../static/images/hands.png';
import heart from '../static/images/heart.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../index.css';
export default class MainPage extends Component {

    render() {
        return (

 <div className="mainpage img-fluid  ">  

<nav className="mb-1 navbar navbar-expand-lg navbar-dark  grey lighten-5">
  <Link className="navbar-brand" href="#"><img src={hands} className="logo" alt="logo" /></Link>
  
  <button className="navbar-toggler  light-blue darken-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item holder">
        <Link className="nav-link" href="#"> <h3 className="access">Sunx<span className="accessb">Access</span> </h3>
        </Link>
      </li>

    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item dropdown">
        <Link to="/" className="btn  text-white btn-outline-pink accent-4  btn-sm rounded-pill">
                   Doctor 
                  </Link>
           </li>    
            <li className="nav-item dropdown"> 
          <Link to="/" className="btn text-white btn-outline-pink accent-4  btn-sm rounded-pill">
                  Patient 
                  </Link>
                  </li>
    </ul>
  </div>
</nav>
         
            <div  className="container-fluid">
            <div className="row content1">
            <div className="col-md-2"></div>
            <div className="col-md-8">
      <Card className="indigo lighten-5" variant="outlined">
      <CardContent>
<p className="text-darken-4">
 <strong> Do not book a GP appointment if you have a fever (over 37.8 degrees), new cough, loss of or change to your sense of smell.</strong>

Stay at home and avoid close contact with other people for at least 7 days - people you live with will need to self-isolate for 14 days.
</p>
     </CardContent>
     </Card>
            </div>
            <div className="col-md-2"></div>
            </div>
                <div className="row content2">
                    <div className="col-md-1"> </div>
                    <div className="col-md-5">
                      <Card className="indigo lighten-5" variant="outlined">
                      <CardContent>
                  <h1 className="textT" >Take control of your healthcare</h1>
                  <hr/>

                  <p className="textP"> 
                  Sunx Access connects you to local health services when you need them most. Book GP appointments, 
                  order repeat prescriptions and discover local health services for you or your family via your mobile or home computer.
                  </p>
                  <hr/>
                  <div className="row">
                  <div className="col-sm-6">
                  <Link to="/Dashboard" className="btn text-white pink accent-4  btn-md rounded-pill">
                  Sign in 
                  </Link>
                  </div>

                  <div className="col-sm-6">
                  <Link to="/PatientAccountPage" className="btn text-white blue lighten-2 btn-md rounded-pill">
                  Register 
                  </Link>
                  </div>
                  </div>
                       </CardContent>
                       </Card>
                    </div>
                    <div className="col-md-5">
                     <Card className="indigo lighten-5 " variant="outlined">
                      <CardContent>
<img src={heart} className="img-fluid health" alt="care heart" />
                       </CardContent>
                       </Card>
                     </div>
                    <div className="col-md-1"> </div>
                    
                </div>
            </div>
             </div>
        )
    }
}
