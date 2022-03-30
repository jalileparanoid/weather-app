import React from 'react'
import DayDetails from './DayDetails'

function CurrentDayDetails({ forcast }) {
    return (
        <div className="description">
            {forcast.map(item => <DayDetails {...item} key={item.name} />)}
        </div>
    )
}

export default CurrentDayDetails