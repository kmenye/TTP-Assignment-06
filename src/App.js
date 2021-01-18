import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import CityInfo from './components/cityInfo';


export default class App extends Component {

    constructor (props) {

      super (props)

      this.state = {
          searchCity : '',
          cityArray : []
      }
  }

  // handleChange function to update the state of zipCode
  handleChange = (e) => {
    let toSearch = e.target.value.toUpperCase()
    this.setState({[e.target.name] : toSearch});
  }

  // make call to API based on state set by the input form
  handleSubmit = async () => {
    
    let url = `http://ctp-zip-api.herokuapp.com/city/${this.state.searchCity}`;
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
      {/* Update the state of city based on the value of user input */}
      <div className = 'header'>
        <h1>
          Enter a City and I will list associated Zip Codes
        </h1>
        
        <div className = 'inputForm'>
          <form>
            <input type = 'text' name = 'searchCity' placeholder = 'Enter city here' value = {this.state.zipCode} onChange = {this.handleChange}></input>
            <button type = 'button' onClick = {this.handleSubmit}>Sumbit</button>
          </form>
        </div>

        <div className = 'currentSearch'>
          <p>
            Currently Searching:  {this.state.searchCity}
          </p>
        </div>
      </div>
      <CityInfo cityData = {this.state.cityArray} city = {this.state.searchCity}/>
    </div>
  )
  }
}