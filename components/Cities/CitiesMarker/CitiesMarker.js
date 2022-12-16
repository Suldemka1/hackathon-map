import React, {useState} from 'react';
import {averageTemperature} from "../../../services/averageTemperature";
import {useSelector} from "react-redux";
import {Marker, Popup, useMapEvent} from "react-leaflet";
import L from "leaflet";

const CitiesMarker = (params) => {
    const cardSettings = useSelector(state => state.cardSettings)
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const factory = new L.divIcon({
        className: '',
        iconAnchor: [12, 25],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -15],
        iconSize: [25, 41],
        html: `<div class='w-[200px] h-[30px] flex flex-row gap-0 items-center justify-between text-[17px] bg-gray-600'>
                    ${cardSettings.displayTemperature ?
            `<div class='max-h-[30px] min-h-[30px] max-w-[50px] bg-gray-700 text-white px-3 py-1'>
                            ${averageTemperature(params.data.daily.temperature_2m_max, params.data.daily.temperature_2m_min)}
                        </div>` : ''}

                        <div class='max-h-[30px] min-h-[30px] w-full bg-gray-600 text-white w-full h-full text-center whitespace-nowrap py-1 px-2'>
                            ${params.data.city.name}
                        </div>

                    ${cardSettings.displayTemperature ?
                    `<div class='max-h-[30px] min-h-[30px] max-w-[50px] bg-gray-700 text-white px-3 py-1'>
                            <img class="w-5 h-5" src="/cityscape.png" />
                        </div>` : ''}
                    </div>`


    });

    return (
        <Marker position={[params.data.latitude, params.data.longitude]} icon={factory}>
            <Popup isPopupOpen={isPopupOpen} offset={[88, 0]} minWidth={153} maxWidth={200}
                   position={[params.data.latitude, params.data.longitude]}>
                <div className="absolute top-0 left-0 right-0 bottom-0 h-[350px] flex flex-col justify-between bg-gray-600 text-white p-3">
                    <div className="grid grid-cols-2 gap-14 justify-between gap-3">
                        <h6>Температура</h6>
                        <h6>20C</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-14 justify-between gap-3">
                        <h6>Влажность</h6>
                        <h6>20C</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-14 justify-between gap-3">
                        <h6>Направление ветра</h6>
                        <h6>20C</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-14 justify-between gap-3">
                        <h6>Температура</h6>
                        <h6>20C</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-14 justify-between gap-3">
                        <h6>Температура</h6>
                        <h6>20C</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-14 justify-between gap-3">
                        <h6>Температура</h6>
                        <h6>20C</h6>
                    </div>
                    <div className="grid grid-cols-2 gap-14 justify-between gap-3">
                        <h6>Температура</h6>
                        <h6>20C</h6>
                    </div>
                    <button className="border rounded border-white py-2">Прогноз на наделю</button>
                </div>
            </Popup>
        </Marker>
    );
};

export default CitiesMarker;
