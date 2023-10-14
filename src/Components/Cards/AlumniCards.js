import React, { Component } from 'react';
import './AlumniCards.css';
class AlumniCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rollNo: '',
      yearOfPassing: '',
      degree: '',
      photo: null  // New state for storing the uploaded photo
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handlePhotoChange = (event) => {
    this.setState({ photo: event.target.files[0] });  // Update photo state with selected file
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add your logic for handling form submission,
    // such as sending data (including the photo) to a server for authentication.
  }

  render() {
    return (
    <div className='AlumniCardsbody'>
      <div className="login-box">
        <h2>Alumni Card Details</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
              />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="rollNo"
              value={this.state.rollNo}
              onChange={this.handleInputChange}
              required
              />
            <label>Roll No</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="yearOfPassing"
              value={this.state.yearOfPassing}
              onChange={this.handleInputChange}
              required
              />
            <label>Year of Passing</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="degree"
              value={this.state.degree}
              onChange={this.handleInputChange}
              required
              />
            <label>Degree</label>
          </div>
          <div className="user-box">
            <input
              type="file"
              name="photo"
              onChange={this.handlePhotoChange}
              accept="image/*"
              />
            <label>Upload Photo</label>
          </div>
          <button type="submit" className='button_submit'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
    );
  }
}

export default AlumniCards;
