import React, { Component } from 'react';



class DonorForm extends Component {
   constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
       <form className="form form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Donor Name: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}




export default DonorForm;