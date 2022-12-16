import {MapContainer, useMapEvents} from "react-leaflet";
import Search from "../Sidebar";
import TileLayers from "./TileLayers";
import RepublicPolygons from "./RepublicPolygons";
import CitiesMarker from "../Cities/CitiesMarker/CitiesMarker";
import React from "react";
import BottomBar from "../BottomBar";
import {useDispatch, useSelector} from "react-redux";
import {setSelectLocation} from "../../store/slices/MapSettingsSlice";
import {setWeeklyForecast} from "../../store/slices/ForecastSlice";
import {setDisplayBottomBar} from "../../store/slices/CardSettingsSlice";
import SelectLocation from "../Overlays/SelectLocation";

const LocationFinderDummy = () => {
    const mapSettings = useSelector(state => state.mapSettings)
    const weeklyForecast = useSelector(state => state.weeklyForecast)
    const dispatch = useDispatch()
    const map = useMapEvents({
        async click(e) {
            if (mapSettings.selectLocation) {
                console.log(e.latlng);
                dispatch(setSelectLocation())

                const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e.latlng.lat}&longitude=${e.latlng.lng}&hourly=temperature_2m,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timeformat=unixtime&timezone=auto&start_date=${new Date().toISOString().split('T')[0]}&end_date=2022-12-24`)
                    .then((res) => res.json())
                    .catch((e) => console.error(e))
                    .finally((res) => console.log(res))

                await dispatch(setWeeklyForecast(weeklyForecast, {
                    average: -1000,
                    temp_min: -1000,
                    temp_max: -2000,
                    humidity: "63%",

                    sunrise: data.daily.sunrise,
                    sunset: data.daily.sunset,

                    forecastWeatherCode: data.daily.weathercode,
                    forecastTime: data.daily.time,
                    forecastTemperatureMax: data.daily.temperature_2m_max,
                    forecastTemperatureMin: data.daily.temperature_2m_min,
                    // forecastHumidity: params.data.daily.humidity

                    status: '',
                    error: ''
                }))
                dispatch(setDisplayBottomBar())
            }
        },
    });
    return null;
};

const Map = (params) => {
    const mapSettings = useSelector(state => state.mapSettings)
    return (
        <MapContainer
            className={`map w-screen h-screen min-h-[100vh] min-w-[100vw]`}
            style={mapSettings.selectLocation ? {cursor: "pointer !important"} : {cursor: 'crosshair !important'}}
            center={[51.8, 94.15]}
            // maxBounds={[[54, 99], [49.4, 88]]}

            zoom={7}
            maxZoom={19}
            minZoom={1}
            zoomControl={false}
            scrollWheelZoom={true}
            doubleClickZoom={false}
            attributionControl={false}
        >
            {
                params.data.map((item, index) =>
                    <CitiesMarker key={index} index={index}
                                  displayTemperature={true}
                                  position={[50, 94]}
                                  data={item}
                    >
                    </CitiesMarker>
                )
            }
            <SelectLocation/>
            <Search/>
            <BottomBar/>
            <TileLayers/>
            <RepublicPolygons/>
            <LocationFinderDummy/>
        </MapContainer>
    )
}

export default Map;
