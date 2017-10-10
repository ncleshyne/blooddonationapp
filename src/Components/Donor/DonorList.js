import React, { Component } from 'react';


class DonorList extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.donor_data.map((donor, i) => <li key={i}>{donor}</li>)}
        </ul>
      </div>
    )
  }
}
export default DonorList;
