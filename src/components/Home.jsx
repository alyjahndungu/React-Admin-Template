import React, { Component } from 'react'

import {Link} from "react-router-dom";


export default class Home extends Component {
    render() {
        return (

            <div className="App container-fluid">
                 <div class="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
              
             <Link to="/Register" className="btn btn-success btn-sm">
             Register as Doctor 
             </Link>
           
             <Link to="/Register" className="btn btn-success btn-sm">
              Register as Patient 
             </Link>
            
             <Link to="/" className="btn btn-success btn-sm">
              Facility Registration 
             </Link>
                </div>
                <div className="col-sm-4"></div>
                </div>
            </div>


        )
    }
}
