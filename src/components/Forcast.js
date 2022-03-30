import React, { Fragment } from 'react'
import CurrentDayDetails from './CurrentDayDetails'
import CurretDay from './CurretDay'

function Forcast({ forecast }) {

    return (
        <Fragment>
            <div className="forcast-container">
                <div className="top">
                    <CurretDay {...forecast.currentDayForecast} />
                </div>
                <div className="bottom">
                    <CurrentDayDetails forcast={forecast.currentDayDetailedForecast} />
                </div>
            </div>
        </Fragment>
    )
}

export default Forcast