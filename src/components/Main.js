import React, { Fragment } from "react";
import Form from "./Form";
import Loader from "./Loader";
import Forcast from "./Forcast";
import useForcast from "./useForecast"

function Main() {

    const { isLoading, error, forecast, submitRequest } = useForcast()

    return (
        <Fragment>
            <div className="title">
                Weather <span>Forecast</span>
            </div>
            {!forecast && (
                <div className="container">
                    {/* Form */}
                    {!isLoading && (
                        <Form
                            error={error}
                            submitRequest={submitRequest}
                        />
                    )}
                    {/* Loader */}
                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forcast forecast={forecast} />}
        </Fragment>
    );
}

export default Main;
