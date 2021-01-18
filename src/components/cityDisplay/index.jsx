
import React from 'react'

export default function CityDisplay(props) {
    return (
        <div className = 'cityData'>
            <div>
                <ul>
                    <li>
                        Zip:  {props.zip}
                    </li>
                </ul>
            </div>
        </div>
    )
}
