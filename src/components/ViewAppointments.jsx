import React, { Component } from 'react'

export default class ViewAppointments extends Component {
    render() {
        return (
            <div>
                <div className="table-responsive text-nowrap">

  <table className="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Doctor</th>
        <th scope="col">Time</th>
        <th scope="col">Date</th>
        <th scope="col">Appointed for</th>
        <th scope="col">Status</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Email</th>
    
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    
    </tbody>
  </table>

</div>
            </div>
        )
    }
}
