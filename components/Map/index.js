import 'leaflet/dist/leaflet.css';
import dynamic from "next/dynamic";

const Map = dynamic(() => import('./Map'), {
    ssr: false
})

export default Map

