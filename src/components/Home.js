import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { BsArrowsVertical } from "react-icons/bs";
import { FaRegGrinBeamSweat } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";

const Home = () => {

    //key provided by open weather map api
    const KEY = '';

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('homs')

    //rendering five days 
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        const newDates = [];
        for (let i = 0; i < 5; i++) {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i);
            newDates.push(nextDate.toDateString());
        }

        setDates(newDates);
    }, []);


    //fetching weather data from api
    const fetchData = async () => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}` //five days forecast
            );
            setWeatherData(res.data);
            
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [city]);

    return (
        <>
        {!weatherData ? 
        <div className='sppinerdiv'>
            <Spinner animation="grow" variant="info" />
        </div>
        : (
            <div className='back'>
            <Row>
                <Col className='ms-5 w-50'>
                    <p className='title'>
                        <HiLocationMarker/> Location: {weatherData.city.name} - {weatherData.city.country}  
                    </p> 
                </Col>
                <Col className='d-flex justify-content-end me-5 mb-2 '>
                    <InputGroup className="w-50">
                        <InputGroup.Text><IoIosSearch/></InputGroup.Text>
                        <Form.Control
                        placeholder="Search for city"
                        aria-label="Search for city"
                        name='city'
                        value={city}
                        onChange={e => setCity(e.target.value)}/>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Row className='my-4 ms-1 d-flex justify-content-center'>
                    <div className='day today' >
                        <p className='date'>Today: {dates[0]}</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} 
                        className='img' alt='weather icon'/>
                        <p><WiDayCloudyWindy/> Description: {weatherData.list[0].weather[0].description}</p>
                        <p><FaTemperatureThreeQuarters/> Temp: {weatherData.list[0].main.temp}°C</p>
                        <p><FaRegGrinBeamSweat/> Feels like: {weatherData.list[0].main.feels_like}°C</p>
                        <p><MdOutlineWaterDrop/> Humidity: {weatherData.list[0].main.humidity}%</p>
                        <p><BsArrowsVertical/> Pressure: {weatherData.list[0].main.pressure}</p>
                        <p><FaWind/> Wind Speed: {weatherData.list[0].wind.speed}m/s</p>
                        <p><FaTemperatureArrowUp/> Max Temp: {weatherData.list[0].main.temp_max}°C</p>
                        <p><FaTemperatureArrowDown/> Min Temp: {weatherData.list[0].main.temp_min}°C</p>
                    </div>
                </Row>

                <Col className='my-4'>
                    <div className='day'>
                        <p className='date'>{dates[1]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[4].weather[0].icon}.png`}
                         className='img' alt='weather icon'/>
                        <p><WiDayCloudyWindy/> Description: {weatherData.list[4].weather[0].description}</p>
                        <p> <FaTemperatureThreeQuarters/> Temp: {weatherData.list[4].main.temp}°C</p>
                        <p> <FaRegGrinBeamSweat/> Feels like: {weatherData.list[4].main.feels_like}°C</p>
                        <p><MdOutlineWaterDrop/> Humidity: {weatherData.list[4].main.humidity}%</p>
                        <p><BsArrowsVertical/> Pressure: {weatherData.list[4].main.pressure}</p>
                        <p><FaWind/> Wind Speed: {weatherData.list[4].wind.speed}m/s</p>
                        <p><FaTemperatureArrowUp/> Max Temp: {weatherData.list[4].main.temp_max}°C</p>
                        <p><FaTemperatureArrowDown/> Min Temp: {weatherData.list[4].main.temp_min}°C</p>
                    </div>
                </Col>

                <Col className='my-4'>
                    <div className='day'>
                        <p className='date'>{dates[2]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[12].weather[0].icon}.png`} 
                        className='img' alt='weather icon'/>
                        <p><WiDayCloudyWindy/> Description: {weatherData.list[12].weather[0].description}</p>
                        <p> <FaTemperatureThreeQuarters/> Temp: {weatherData.list[12].main.temp}°C</p>
                        <p> <FaRegGrinBeamSweat/> Feels like: {weatherData.list[12].main.feels_like}°C</p>
                        <p><MdOutlineWaterDrop/> Humidity: {weatherData.list[12].main.humidity}%</p>
                        <p><BsArrowsVertical/> Pressure: {weatherData.list[12].main.pressure}</p>
                        <p><FaWind/> Wind Speed: {weatherData.list[12].wind.speed}m/s</p>
                        <p><FaTemperatureArrowUp/> Max Temp: {weatherData.list[12].main.temp_max}°C</p>
                        <p><FaTemperatureArrowDown/> Min Temp: {weatherData.list[12].main.temp_min}°C</p>
                    </div>
                </Col>

                <Col className='my-4'>
                    <div className='day'>
                        <p className='date'>{dates[3]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[20].weather[0].icon}.png`}
                         className='img' alt='weather icon'/>
                        <p><WiDayCloudyWindy/> Description: {weatherData.list[20].weather[0].description}</p>
                        <p> <FaTemperatureThreeQuarters/> Temp: {weatherData.list[20].main.temp}°C</p>
                        <p><FaRegGrinBeamSweat/> Feels like: {weatherData.list[20].main.feels_like}°C</p>
                        <p><MdOutlineWaterDrop/> Humidity: {weatherData.list[20].main.humidity}%</p>
                        <p><BsArrowsVertical/> Pressure: {weatherData.list[20].main.pressure}</p>
                        <p><FaWind/> Wind Speed: {weatherData.list[20].wind.speed}m/s</p>
                        <p><FaTemperatureArrowUp/> Max Temp: {weatherData.list[20].main.temp_max}°C</p>
                        <p><FaTemperatureArrowDown/> Min Temp: {weatherData.list[20].main.temp_min}°C</p>
                    </div>
                </Col>

                <Col className='my-4'>
                    <div className='day'>
                        <p className='date'>{dates[4]}:</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.list[28].weather[0].icon}.png`}
                         className='img' alt='weather icon'/>
                        <p><WiDayCloudyWindy/> Description: {weatherData.list[28].weather[0].description}</p>
                        <p> <FaTemperatureThreeQuarters/> Temp: {weatherData.list[28].main.temp}°C</p>
                        <p><FaRegGrinBeamSweat/> Feels like: {weatherData.list[28].main.feels_like}°C</p>
                        <p><MdOutlineWaterDrop/> Humidity: {weatherData.list[28].main.humidity}%</p>
                        <p><BsArrowsVertical/> Pressure: {weatherData.list[28].main.pressure}</p>
                        <p><FaWind/> Wind Speed: {weatherData.list[28].wind.speed}m/s</p>
                        <p><FaTemperatureArrowUp/> Max Temp: {weatherData.list[28].main.temp_max}°C</p>
                        <p><FaTemperatureArrowDown/> Min Temp: {weatherData.list[28].main.temp_min}°C</p>
                    </div>
                </Col>
            </Row>
            </div>
        )}
    </>
    )
}

export default Home
