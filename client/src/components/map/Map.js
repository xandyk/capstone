import React from "react";
import MapMarkers from "../map/MapMarkers";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import key from "./keys";

require("dotenv").config();

export default function FullMap() {
  const WrappedMap = withScriptjs(withGoogleMap(MapMarkers));
  const capkey = key.googleApiKey;
  return (
    <>
      <div className="body" style={{ width: "100vw", height: "95vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${capkey}&callback=initMap`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={
            <div className="element-container" style={{ height: "100%" }} />
          }
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </>
  );
}
