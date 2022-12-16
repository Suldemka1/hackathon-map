import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchWeeklyForecast = createAsyncThunk(
    "warehouses/fetchWeeklyForecast",
    async () => {
        const response = await fetch(
            ``
        );
        const data = await response.json();
        console.log(data);
        return await data;
    }
);

const initialState = {
    average: -24,
    temp_min: -38,
    temp_max: -10,
    humidity: '',

    sunrise: [],
    sunset: [],

    forecastWeatherCode: [],

    forecastTime: [],
    forecastTemperature: [],
    forecastHumidity: [],

    status: '',
    error: ''

}

const forecastSlice = createSlice({
    name: 'forecastSlice',
    initialState,
    reducers: {

        setWeeklyForecast: {
            reducer(state, action) {
                state.average = action.payload.average
                state.average = action.payload.average
                state.temp_min = action.payload.temp_min
                state.temp_max = action.payload.temp_min
                state.humidity = action.payload.humidity

                state.sunrise = action.payload.sunrise
                state.sunset = action.payload.sunset

                state.forecastWeatherCode = action.payload.forecastWeatherCode
                state.forecastTime = action.payload.forecastTime
                state.forecastTemperatureMax = action.payload.forecastTemperatureMax
                state.forecastTemperatureMin = action.payload.forecastTemperatureMin
                state.forecastHumidity = action.payload.forecastHumidity

                console.log(action.payload)
            },
            prepare: (value, action) => {
                return {
                    payload: {
                        average: action.average,
                        temp_min: action.temp_min,
                        temp_max: action.temp_max,
                        humidity: action.humidity,

                        sunrise: action.sunrise,
                        sunset: action.sunset,

                        forecastWeatherCode: action.forecastWeatherCode,
                        forecastTime: action.forecastTime,
                        forecastTemperatureMax: action.forecastTemperatureMax,
                        forecastTemperatureMin: action.forecastTemperatureMin,
                        forecastHumidity: action.forecastHumidity,

                        status: '',
                        error: ''
                    }
                }
            }
        }
    }
})

export const {setWeeklyForecast} = forecastSlice.actions
export default forecastSlice.reducer
