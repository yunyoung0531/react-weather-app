import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherBtn = ({cities, setCity}) => {
    console.log("cities는 ", cities)
    //const [city, setCity] = useState('')
    return (
    <div>
        {/* <Button variant="primary">Current location</Button> */}
        {cities.map((item, index) => (
            <Button className='bootbtn'
            variant="primary" 
            key={index} 
            onClick={()=>setCity(item)}>
                {item}
            </Button>
        ))}
    </div>
    )
}

export default WeatherBtn