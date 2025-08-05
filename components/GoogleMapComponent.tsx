"use client";
import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface GoogleMapComponentProps {
  center: { lat: number; lng: number };
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ center }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  const mapStyles = useMemo(
    () => ({
      height: "400px",
      width: "100%",
    }),
    []
  );

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={18}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
