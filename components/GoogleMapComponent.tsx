"use client";
import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const GoogleMapComponent = ({ center }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"], // Example: include the places library
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
