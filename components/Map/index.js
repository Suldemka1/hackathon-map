import 'leaflet/dist/leaflet.css';
import Search from "../Search";
import RepublicPolygons from "./RepublicPolygons";
import TileLayers from "./TileLayers";
import {MapContainer} from "react-leaflet";

const Map = () => {

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
            <Search/>
            <TileLayers/>
            <RepublicPolygons/>
        </MapContainer>
    )
}

export default Map;
