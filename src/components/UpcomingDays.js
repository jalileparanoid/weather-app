import React from 'react'
import UpcomingDaysItem from './UpcomingDaysItem'

function UpcomingDays({ days }) {
    return (
        <div className="box">
            {days.map(day => <UpcomingDaysItem {...day} key={day.weekday} />)}
        </div>
    )
}

export default UpcomingDays