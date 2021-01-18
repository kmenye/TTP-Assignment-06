
import React from 'react'

export default function CityDisplay(props) {
    return (
        <div className = 'cityData'>
            <div>
                <p>
                City Name: {props.name}
                </p>
                <ul>
                    <li>Zip:  {props.zip}</li>
                    <li>Origin State:  {props.state}</li>
                    <li>Origin Country:  {props.country}</li>
                    <li>Estimated Population:  {props.population}</li>
                </ul>
            </div>
        </div>
    )
}
