"use client";
import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = { lat, lng };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 13,
        mapId: "c8e9c3eebdd61a3a",
        disableDefaultUI: true,
        styles: [
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "administrative",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          { featureType: "landscape", stylers: [{ visibility: "off" }] },
        ],
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Create a custom icon
      const icon = document.createElement("div");
      icon.style.backgroundImage = "url(/my-logo.png)"; // Path to your logo
      icon.style.backgroundSize = "cover";
      icon.style.width = "50px"; // Set the width of the icon
      icon.style.height = "50px"; // Set the height of the icon

      // Create an AdvancedMarkerElement
      new AdvancedMarkerElement({
        map,
        position,
        content: icon,
      });
    };

    initMap();
  }, [lat, lng]);

  return (
    <div className="flex flex-col items-center justify-start w-full ">
      <div className="w-[70%] h-fit perspective-[300px] hover:perspective-[2000px] transition-all duration-1000   ">
        <div className=" h-90 rotate-x-10">
          <div className="w-full h-full rounded-2xl shadow-lg " ref={mapRef} />
        </div>
      </div>
    </div>
  );
};

export default Map;
