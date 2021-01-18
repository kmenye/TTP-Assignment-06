import React, { Component } from 'react'
import CityDisplay from '../cityDisplay'


export default class CityInfo extends Component {

    render() {

        console.log(this.props.cityData)
        return (
            <div>
                <div className = 'city-container'>
                {this.props.cityData.map((result, index) => {
                    return (
                        <CityDisplay 
                        key = {index}
                        zip = {result.Zipcode}
                        name = {result.City}
                        state = {result.State}
                        country = {result.Country}
                        population = {result.EstimatedPopulation}
                        />
                    )
                })}
                </div>
            </div>
            
        )
    }
}
