import React from 'react';
import {TileLayer} from "react-leaflet";

const TileLayers = () => {
    return (
        <div>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                opacity={1}
            />
            <TileLayer
                url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=76735a90e4bb65c353382e372da76262`}
            />
            <TileLayer
                url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=76735a90e4bb65c353382e372da76262`}
            />
        </div>
    );
};

export default TileLayers;
