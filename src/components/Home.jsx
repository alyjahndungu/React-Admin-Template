import React, { Component } from 'react'

import {Link} from "react-router-dom";


export default class Home extends Component {
    render() {
        return (

            <div className="App container-fluid">
                 <div className="row">
                <div className="col-sm-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo cum nemo suscipit omnis eius commodi blanditiis aliquam non delectus, consequuntur odit praesentium neque facere. Facilis labore perspiciatis soluta mollitia.
                </div>
                <div className="col-sm-4">
              
             <Link to="/Register" className="btn btn-success btn-sm">
             Register as Doctor 
             </Link>
           
             <Link to="/PatientAccountPage" className="btn btn-success btn-sm">
              Register as Patient 
             </Link>
         
                </div>
                <div className="col-sm-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt voluptate sequi, atque adipisci veniam dolores totam eos deserunt esse, maxime, quia beatae ab porro nostrum consequuntur saepe reiciendis temporibus.
                </div>
                </div>
            </div>


        )
    }
}
