import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import CityInfo from './components/cityInfo';


export default class App extends Component {

    constructor (props) {

      super (props)

      this.state = {
          zipCode : '',
          cityArray : []
      }
  }

  // handleChange function to update the state of zipCode
  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  // make call to API based on state set by the input form
  handleSubmit = async () => {
    
    let url = `http://ctp-zip-api.herokuapp.com/zip/${this.state.zipCode}`;
    try {

     let payload = await axios.get(url);
     console.log(payload);

     this.setState({cityArray: payload.data});
     console.log(this.state.cityArray);
      
    } catch (error) {
      console.log(error);
    }
  }

  render(){
  return(
    <div className = 'container'>
      {/* Update the state of zipCode based on the value of user input */}
      <div className = 'header'>
        <h1>
          Enter a zip and I will list its cities
        </h1>
        
        <div className = 'inputForm'>
          <form>
            <input type = 'text' name = 'zipCode' placeholder = 'Enter zip here' value = {this.state.zipCode} onChange = {this.handleChange}></input>
            <button type = 'button' onClick = {this.handleSubmit}>Sumbit</button>
          </form>
        </div>

        <div className = 'currentSearch'>
          <p>
            Currently Searching:  {this.state.zipCode}
          </p>
        </div>
      </div>
      <CityInfo cityData = {this.state.cityArray} zip = {this.state.zipCode}/>
    </div>
  )
  }
}