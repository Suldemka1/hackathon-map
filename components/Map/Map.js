import {MapContainer, Popup} from "react-leaflet";
import Search from "../Search";
import TileLayers from "./TileLayers";
import RepublicPolygons from "./RepublicPolygons";
import CitiesMarker from "../Cities/CitiesMarker/CitiesMarker";
import React from "react";
import BottomBar from "../BottomBar";

const Map = (params) => {

    return (
        <MapContainer
            className="map w-screen h-screen min-h-[100vh] min-w-[100vw]"
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
                params.data.map((item) => <CitiesMarker displayTemperature={true} position={[50, 94]} data={item} eventHandler={() => {
                    click: console.log('fuck')
                    }}>
                        <Popup>{item.name}</Popup>
                    </CitiesMarker>
                )
            }
            <Search/>
            <BottomBar />
            <TileLayers/>
            <RepublicPolygons/>
        </MapContainer>
    )
}

export default Map;
