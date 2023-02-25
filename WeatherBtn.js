import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherBtn = () => {
    return (
    <div>
        <Button variant="primary">Current location</Button>{' '}
        <Button variant="primary">Seoul</Button>{' '}
        <Button variant="primary">New York</Button>{' '}
    </div>
    )
}

export default WeatherBtn