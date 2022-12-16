import React from 'react';
import polygons from "../../data.json";
import {GeoJSON, Tooltip} from "react-leaflet";
import {useRouter} from "next/router";

const RepublicPolygons = () => {
    const router = useRouter()
    return (
        <div>
            {
                polygons.map((item) => {
                    return (
                        <GeoJSON
                            key={item.id}
                            // @ts-ignore
                            data={item}
                            style={() => ({
                                color: "rgb(30 64 175)",
                                weight: .3,
                                fillColor: "rgb(59 130 246)",
                                fillOpacity: .03,
                            })}

                            className="hover:fill-white hover:transition hover:ease-in-out hover:duration-400 outline-none border-none cursor-none"

                        >
                            {/*<Tooltip sticky>{item.properties.description}</Tooltip>*/}
                        </GeoJSON>
                    );
                })
            }
        </div>
    );
};

export default RepublicPolygons;
