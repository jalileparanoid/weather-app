import React from 'react'

function UpcomingDaysItem({ imgUrl, weekday, minTemp, maxTemp }) {
    const imgBaseUrl = `https://www.metaweather.com/static/img/weather/${imgUrl}.svg`
    return (
        <div className="next-day">
            <h4 className="day-name">{weekday}</h4>
            <img src={imgBaseUrl} alt="icon" />
            <div className="next-temp">
                <p>{maxTemp}°</p>
                <p>{minTemp}°</p>
            </div>
        </div>
    )
}

export default UpcomingDaysItem