"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet icon issue in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export default function MapComponent() {
  // Coordinates for a dummy route in Dhaka
  const dhakaCenter: [number, number] = [23.8103, 90.4125];
  const routePoints: [number, number][] = [
    [23.8103, 90.4125], // Start: Gulshan
    [23.7937, 90.4066], // Waypoint: Banani
    [23.7461, 90.3742]  // End: Dhanmondi
  ];

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-slate-200">
      <MapContainer 
        center={dhakaCenter} 
        zoom={12} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        <Marker position={routePoints[0]} icon={icon}>
          <Popup>
            <div className="font-semibold text-slate-900">Pickup Location</div>
            <div className="text-xs text-slate-500">Gulshan Warehouse</div>
          </Popup>
        </Marker>
        
        <Marker position={routePoints[2]} icon={icon}>
          <Popup>
            <div className="font-semibold text-slate-900">Delivery Location</div>
            <div className="text-xs text-slate-500">Customer Address</div>
          </Popup>
        </Marker>

        <Polyline 
          positions={routePoints} 
          pathOptions={{ color: '#D1A174', weight: 4, dashArray: '10, 10' }} 
        />
      </MapContainer>
    </div>
  );
}
