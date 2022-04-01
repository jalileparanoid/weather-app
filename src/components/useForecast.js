import { useState } from "react";
import moment from "moment";
import axios from "axios";

const useForecast = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [forecast, setForecast] = useState(null);

    const BASE_URL =
        "https://shrouded-plateau-37107.herokuapp.com/https://www.metaweather.com/api/location";

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

    const getCurrentDayForcast = (data, title, fullData) => ({
        weekday: moment(data.applicable_date).format("dddd"),
        country: fullData.parent.title,
        date: moment(data.applicable_date).format("MMMM D"),
        location: title,
        temperature: Math.round(data.the_temp),
        minTemp: Math.round(data.min_temp),
        maxTemp: Math.round(data.max_temp),
        weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
        weatherDescription: data.weather_state_name,
        humidity: data.humidity,
        visibility: Math.round(data.visibility),
        wind: Math.round(data.wind_speed),
    });

    const getUpcomingDaysForecast = (data) =>
        data.slice(1).map((day) => ({
            imgUrl: day.weather_state_abbr,
            maxTemp: Math.round(day.max_temp),
            minTemp: Math.round(day.min_temp),
            weekday: moment(day.applicable_date).format("dddd").substring(0, 3),
        }));

    const gatherForcastData = (data) => {
        const currentDayForecast = getCurrentDayForcast(
            data.consolidated_weather[0],
            data.title,
            data
        );
        const upcomingDaysForecast = getUpcomingDaysForecast(
            data.consolidated_weather
        );

        setLoading(false);
        setForecast({
            currentDayForecast,
            upcomingDaysForecast,
        });
    };

    const submitRequest = async (location) => {
        setError(null);
        setLoading(true);

        const response = await getWoeid(location);
        if (!response) return;

        const data = await getForcastData(response.woeid);
        if (!data) return;

        gatherForcastData(data);
    };

    return {
        isLoading,
        error,
        forecast,
        submitRequest,
    };
};

export default useForecast;
