import React from 'react'

function CurretDay({ weekday, date, location, temperature, weatherIcon, weatherDescription }) {
    return (
        <div className="current-day">
            <div className="info">
                <h2>{location}</h2>
                <p>{weekday}, {date}</p>
                <img src={weatherIcon} alt="weather-icon" />
                <p className="decription">{weatherDescription}</p>
            </div>
            <h1>{temperature}°</h1>
        </div>
    )
}

export default CurretDay