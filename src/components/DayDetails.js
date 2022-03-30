import React from 'react'

function DayDetails({ name, value, unit }) {
    return (
        <div className="forecast-decription">
            <p>{name}</p>
            <p>{value}{unit}</p>
        </div>
    )
}

export default DayDetails