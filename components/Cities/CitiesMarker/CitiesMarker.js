import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import {setDisplayBottomBar} from "../../../store/slices/CardSettingsSlice";
import {setWeeklyForecast} from "../../../store/slices/ForecastSlice";

const CitiesMarker = (params) => {
    const cardSettings = useSelector(state => state.cardSettings)
    const weeklyForecast = useSelector(state => state.weeklyForecast)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const dispatch = useDispatch()

    const factory = new L.divIcon({
        className: '',
        iconAnchor: [12, 25],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -15],
        iconSize: [25, 41],
        html: `<div class='w-[140px] h-[30px] flex flex-row gap-0 items-center justify-between text-[17px] bg-gray-600'>
                    ${cardSettings.displayTemperature ?
            `<div class='max-h-[30px] min-h-[30px] max-w-[50px] bg-gray-700 text-white px-3 py-1'>
                            ${Math.round((params.data.daily.temperature_2m_max[params.index] + params.data.daily.temperature_2m_min[params.index]) / 2)}
                        </div>` : ''}

                        <div class='max-h-[30px] min-h-[30px] w-full bg-gray-600 text-white w-full h-full text-center whitespace-nowrap py-1 px-2'>
                            ${params.data.city.name}
                        </div>
                    </div>`

    });

    return (
        <Marker position={[params.data.latitude, params.data.longitude]} icon={factory}>
            <Popup isPopupOpen={isPopupOpen} offset={[88, 0]} minWidth={153} maxWidth={200}
                   position={[params.data.latitude, params.data.longitude]}>
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 h-[150px] flex flex-col justify-between bg-gray-600 text-white p-3">
                    <h1 className="text-xl">{params.data.city.name}</h1>

                    <div className="grid grid-cols-2 gap-1 justify-between gap-3">
                        <h6>Температура</h6>
                        <h6>{params.data.daily.temperature_2m_max[0]} /{params.data.daily.temperature_2m_min[0]}</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-1 justify-between gap-3">
                        <h6>Температура</h6>
                        <h6>20C</h6>
                    </div>

                    <button onClick={async () => {
                        await dispatch(setWeeklyForecast(weeklyForecast, {
                            average: -1000,
                            temp_min: -1000,
                            temp_max: -2000,
                            humidity: "63%",

                            sunrise: params.data.daily.sunrise,
                            sunset: params.data.daily.sunset,

                            forecastWeatherCode: params.data.daily.weathercode,
                            forecastTime: params.data.daily.time,
                            forecastTemperatureMax: params.data.daily.temperature_2m_max,
                            forecastTemperatureMin: params.data.daily.temperature_2m_min,
                            // forecastHumidity: params.data.daily.humidity

                            status: '',
                            error: ''
                        }))
                        dispatch(setDisplayBottomBar())
                    }

                    } className="border rounded border-white py-2">Прогноз на наделю
                    </button>
                </div>
            </Popup>
        </Marker>
    );
};

export default CitiesMarker;
