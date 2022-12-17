import React, {useEffect} from 'react';
import Link from "next/link";
import {SlArrowDown} from "react-icons/sl";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayBottomBar} from "../../store/slices/CardSettingsSlice";
import {setWeatherIcon} from "../../services/setWeatherIcon";

const BottomBar = () => {
    const bottomBar = useSelector(state => state.cardSettings)
    const forecast = useSelector(state => state.weeklyForecast)

    useEffect(() => {
        console.log(forecast)
    }, [forecast])

    const dispatch = useDispatch()
    return (
        <div>
            {bottomBar.displayBottomBar && <div
                className="absolute bottom-0 left-0 w-full h-2/5 bg-gray-700 text-white text-lg px-4 py-4 z-[1500]">
                <div className="flex flex-row justify-between h-12">
                    <div>
                        <h1 className="text-2xl">Прозноз погоды на неделю</h1>
                    </div>
                    <div>
                        <button onClick={() => dispatch(setDisplayBottomBar())}
                                className="px-2 py-2 border-2 rounded-full border-white">
                            <SlArrowDown/>
                        </button>
                    </div>

                </div>

                <div className="inline-block whitespace-nowrap flex flex-row gap-3">
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                            const date = new Date(forecast.forecastTime[item] * 1000)
                            const formatted_date = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear()

                            const sunset = new Date(forecast.sunset[item] * 1000)
                            const sunsetTime = sunset.getHours() + ":" + sunset.getMinutes()
                            const sunrise = new Date(forecast.sunrise[item] * 1000)
                            const sunriseTime = sunrise.getHours() + ":" + sunrise.getMinutes()

                            return <div key={item} className="max-w-1/12 w-1/5 border-white border-2 text-[15px] rounded p-3">
                                <div>
                                    {formatted_date}
                                </div>
                                <div className="flex justify-center items-center">
                                    {setWeatherIcon(forecast.forecastWeatherCode[item])}
                                </div>
                                <div>

                                    <span className="grid grid-cols-2"><h6>Средняя</h6>
                                        <h6
                                            className="text-end">
                                        {Math.round((forecast.forecastTemperatureMax[item] + forecast.forecastTemperatureMin[item]) / 2)}
                                    </h6>
                                    </span>
                                    <span className="grid grid-cols-2"><h6>Температура</h6>
                                        <h6
                                            className="text-end">
                                        {forecast.forecastTemperatureMax[item]} / {forecast.forecastTemperatureMin[item]}
                                        </h6>
                                    </span>
                                </div>

                                <div>
                                    <span className="grid grid-cols-2">
                                        <h6>Восход</h6>
                                        <h6 className="text-end">{sunriseTime}</h6>
                                    </span>
                                    <span className="grid grid-cols-2">
                                        <h6>Закат</h6>
                                        <h6 className="text-end">{sunsetTime}</h6>
                                    </span>

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            }
        </div>

    );
};

export default BottomBar;
