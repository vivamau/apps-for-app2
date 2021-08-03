import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";
import React, { memo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Scale = (p) => {
  let scale = 600;
  if (p > 2000000) {
    scale = 1000;
  } else {
    if (p < 1999999 && p > 500000) {
      scale = 3000;
    } else {
      if (p < 499999 && p > 150000) {
        scale = 5000;
      } else {
        if (p < 150000) {
          scale = 10000;
        }
      }
    }
  }
  return scale;
};

const MapChartParameters = (props) => {
  return (
    <>
      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{
          rotate: [0, 0],
          scale: Scale(props.country.area),
          center: [props.country.latlng[1], props.country.latlng[0]],
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.ISO_A2 === props.country.alpha2Code)
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#f7b825"
                  stroke="#085d98"
                  strokeWidth="0"
                />
              ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};
export default MapChartParameters;
