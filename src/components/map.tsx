"use client";

import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';

export default function Map() {
  const position = { lat: 46.7323, lng: 12.2286 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
        <p>Google Maps API key is missing.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <GoogleMap
        defaultCenter={position}
        defaultZoom={14}
        mapId="skischool-map"
        style={{ width: '100%', height: '100%' }}
      >
        <Marker position={position} />
      </GoogleMap>
    </APIProvider>
  );
}
