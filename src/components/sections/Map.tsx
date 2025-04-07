"use client";
import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { mapData } from "@/utils/data";

const Map = () => {
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

      // Extract the first position to center the map
      const defaultCenter = mapData[0];
      const mapOptions: google.maps.MapOptions = {
        center: defaultCenter,
        zoom: 8, // Adjusted zoom level to fit multiple markers
        mapId: "dbbf6615a1df8de8",
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

      // Loop through mapData and add markers for each position
      mapData.forEach((data) => {
        const { lat, lng } = data;
        const position = { lat, lng };

        // Create a custom icon for each marker
        const icon = document.createElement("div");
        icon.style.backgroundImage = "url(/my-logo.png)"; // Path to your logo
        icon.style.backgroundSize = "cover";
        icon.style.width = "70px"; // Set the width of the icon
        icon.style.height = "70px"; // Set the height of the icon

        // Create an AdvancedMarkerElement for each position
        new AdvancedMarkerElement({
          map,
          position,
          content: icon,
        });
      });
    };

    initMap();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="w-full sm:w-[70%]  h-[400px] sm:perspective-[300px] hover:perspective-[2000px] transition-all duration-1000">
        <div className="h-90 rotate-x-10">
          <div
            className="w-full h-full rounded-2xl shadow-lg"
            ref={mapRef}
            style={{ height: "400px" }} // Ensure the map container has a fixed height
          />
        </div>
      </div>
    </div>
  );
};

export default Map;