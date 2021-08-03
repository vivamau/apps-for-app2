import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 15, name: "Damascus", coordinates: [36.29128, 33.5102] },
  { markerOffset: 15, name: "Homs", coordinates: [36.72339, 34.72682] },
  { markerOffset: 15, name: "Aleppo", coordinates: [37.16117, 36.20124] },
  { markerOffset: 15, name: "Palmyra", coordinates: [38.28402, 34.5624] },
  { markerOffset: 15, name: "Aleppo", coordinates: [37.16117, 36.20124] },
];

const MapChart = () => {
  return (
    <ComposableMap
      className="homecountry-map-container"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-39.0, -35.19, 0],
        scale: 6000,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter((d) => d.properties.ISO_A3 === "SYR")
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#f7b825"
                stroke="#fff"
                strokeWidth="4"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontFamily: "Open Sans",
              fill: "#19486a",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};
export default MapChart;
