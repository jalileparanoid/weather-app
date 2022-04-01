import React, { Fragment } from 'react'
import CurretDay from './CurretDay'
import UpcomingDays from './UpcomingDays'

function Forcast({ forecast }) {

    return (
        <Fragment>
            <div className="forcast-container">
                <div className="current">
                    <CurretDay {...forecast.currentDayForecast} />
                </div>
                <div className="upcoming">
                    <UpcomingDays days={forecast.upcomingDaysForecast} />
                </div>
            </div>
        </Fragment>
    )
}

export default Forcast