import React, { Component } from 'react';
import './App.css';
import DonorForm from './Components/Donor/DonorForm';
import DonorList from './Components/Donor/DonorList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donors: [],
      filtered_donors: []
    }
  }

  addNewDonor(donor) {
    console.log(donor);
    this.setState({
      donors: this.state.donors.concat(donor),
      filtered_donors: this.state.donors.concat(donor)
    })
  }


search(e) {
  var search_term = e.target.value;

  var filtered = this.state.donors.filter(function(donor){
    return donor.includes(search_term);
  });

  this.setState({
    filtered_donors: filtered
  })
}

  
  render() {
    return (
      <div className="App">
        <input placeholder='Search' onChange={(e) => this.search(e)} />
        <h1>Become a Donor</h1>
        <DonorForm addNewDonorFunc={this.addNewDonor.bind(this)}/>
        <DonorList donor_data={this.state.donors} />
      </div>
    );
  }
}

export default App;
