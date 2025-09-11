"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

const GoogleMap = () => {
  const mapRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const iniMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");
      //init a marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 5.4048,
        lng: 7.0406,
      };

      //map option
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      //setup options
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      //put up a marker
      const marker = new Marker({
        map: map,
        position: position,
      });
    };
    iniMap();
  }, []);

  return (
    <div className="bg-white">
      <div style={{ height: "300px" }} ref={mapRef} />
    </div>
  );
};
export default GoogleMap;
