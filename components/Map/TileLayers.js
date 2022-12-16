import React from 'react';
import {LayersControl, TileLayer} from "react-leaflet";


const TileLayers = () => {
    return (
        <div>
            <LayersControl position="topleft">
                <LayersControl.BaseLayer name="Карта горных вершин">
                    <TileLayer
                        attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer checked name="Обычная карта">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                
                <TileLayer
                    url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=76735a90e4bb65c353382e372da76262`}
                />
                <TileLayer
                    url={`http://maps.openweathermap.org/maps/2.0/weather/PA0/{z}/{x}/{y}?date=1527811200&appid=76735a90e4bb65c353382e372da76262`}
                />
            </LayersControl>
        </div>
    );
};

export default TileLayers;
