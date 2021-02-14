import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import axios from "axios";
export default function Map() {
  const [allArt, setAllArt] = useState(undefined);
  const [selectedArt, setSelectedArt] = useState(null);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  useEffect(() => {
    if (allArt === undefined) {
      axios.get("http://localhost:5000/artworks").then(res => {
        setAllArt(res.data);
      });
    }
  });

  // Geolocation
  if (allArt !== undefined) {
    return (
      <>
        <GoogleMap
          className="map-container"
          defaultZoom={13.4}
          defaultCenter={{ lat: 49.268632, lng: -123.100456 }}
          // defaultOptions={{ styles: mapStyles }}
        >
          {allArt.map(art => (
            <Marker
              className="marker"
              key={art.location.id}
              position={{
                lat: art.location.lat,
                lng: art.location.lng
              }}
              onClick={() => {
                setSelectedArt(art);
              }}
              icon={{
                url: "/spray.svg",
                scaledSize: new window.google.maps.Size(26, 26)
              }}
            />
          ))}

          {selectedArt && (
            <InfoWindow
              className="window-wrap"
              position={{
                lat: selectedArt.location.lat,
                lng: selectedArt.location.lng
              }}
              onCloseClick={() => {
                setSelectedArt(null);
              }}
            >
              <div className="window-container">
                <h6>{selectedArt.artists[0].title}</h6>
                <img
                  className="art-photo"
                  src={selectedArt.images[0].sizes.small}
                  alt="photo"
                />
                <p>{selectedArt.title}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
