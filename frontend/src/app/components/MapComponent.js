"use client"; 
import { useEffect } from "react";

export default function MapComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.mapboxgl) {
        window.mapboxgl.accessToken =
          "pk.eyJ1IjoiYnJpYW4tcyIsImEiOiJjbThwZGhncWkwYWlqMnhvZWx2OGl6OHl4In0.F3SE6K76b2eR5Q31eNgJlQ";

        new window.mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v12",
          center: [-74.5, 40],
          zoom: 9,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "75%", height: "1080px"}}></div>;
}
