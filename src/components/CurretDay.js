import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet, faEye } from '@fortawesome/free-solid-svg-icons'


function CurretDay({ weekday, country, date, location, temperature, minTemp, maxTemp, weatherIcon, weatherDescription, humidity, visibility, wind }) {
    return (
        <div className="current-day">
            <div className="left">
                <h2 className="city-name">{location}</h2>
                <p className="country-name">{country}</p>
                <p className="date">{weekday}, {date}</p>
                <img src={weatherIcon} alt="weather-icon" />
                <p className="describe">{weatherDescription}</p>
            </div>
            <div className="right">
                <div>
                    <h1 className="temp">{temperature}°</h1>
                    <h4 className="min-max-temp">{maxTemp}° / {minTemp}°</h4>
                </div>
                <div className="details">
                    <div className="humidity">
                        <FontAwesomeIcon icon={faDroplet} title="Humidity" />
                        <p>{humidity}%</p>
                    </div>
                    <div className="visibility">
                        <FontAwesomeIcon icon={faEye} title="Visibility" />
                        <p>{visibility}km</p>
                    </div>
                    <div className="wind">
                        <FontAwesomeIcon icon={faWind} title="Wind" />
                        <p>{wind}km/h</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurretDay