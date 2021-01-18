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
                        zip = {result}
                        />
                    )
                })}
                </div>
            </div>
            
        )
    }
}
