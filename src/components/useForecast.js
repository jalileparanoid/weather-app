import { useState } from "react";
import moment from 'moment';
import axios from "axios";

const useForecast = () => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [forecast, setForecast] = useState(null);

    const BASE_URL = "https://www.metaweather.com/api/location";

    const getWoeid = async (location) => {
        let { data } = await axios(`${BASE_URL}/search/?query=${location}`);

        if (!data || data.length === 0) {
            setError("There's no such location!");
            setLoading(false);
            return;
        }

        return data[0];
    };

    const getForcastData = async (woeid) => {
        let { data } = await axios(`${BASE_URL}/${woeid}`);

        if (!data || data.length === 0) {
            setError("Somthing wend wrong!");
            setLoading(false);
            return;
        }

        return data;
    };

    const getCurrentDayForcast = (data, title) => ({
        weekday: moment(data.applicable_date).format('dddd'),
        date: moment(data.applicable_date).format('MMMM D'),
        location: title,
        temperature: Math.round(data.the_temp),
        weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
        weatherDescription: data.weather_state_name
    })

    const getCurrentDayDetailedForecast = (data) => [
        {
            name: "predictability",
            value: data.predictability,
            unit: "%"
        },
        {
            name: "humidity",
            value: data.humidity,
            unit: "%"
        },
        {
            name: "wind speed",
            value: Math.round(data.wind_speed),
            unit: "km/h"
        },
        {
            name: "air pressure",
            value: data.air_pressure,
            unit: "mb"
        },
        {
            name: 'max temp',
            value: Math.round(data.max_temp),
            unit: '°C',
        },
        {
            name: 'min temp',
            value: Math.round(data.min_temp),
            unit: '°C',
        }
    ]

    const getUpcomingDaysForecast = (data) => {
        data.slice(1).map(day => ({
            weekday: moment(day.applicable_date).format('dddd').substring(0, 3),
            weatherIcon: day.weather_state_abbr,
            temperature: Math.round(day.max_temp),
        }))
    }

    const gatherForcastData = (data) => {
        const currentDayForecast = getCurrentDayForcast(data.consolidated_weather[0], data.title)
        const currentDayDetailedForecast = getCurrentDayDetailedForecast(data.consolidated_weather[0])
        const upcomingDaysForecast = getUpcomingDaysForecast(data.consolidated_weather)

        setLoading(false)
        setForecast({ currentDayForecast, currentDayDetailedForecast, upcomingDaysForecast })
    }

    const submitRequest = async (location) => {
        setError(null);
        setLoading(true);

        const response = await getWoeid(location);
        if (!response) return;

        const data = await getForcastData(response.woeid);
        if (!data) return;

        gatherForcastData(data)
    };

    return {
        isLoading,
        error,
        forecast,
        submitRequest,
    };
};

export default useForecast;