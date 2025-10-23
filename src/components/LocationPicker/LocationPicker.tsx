import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FormLabel } from "../ui/label";
import { Input } from "../ui/input";

// Default icon fix for Leaflet in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface LocationPickerProps {
  latitude?: number;
  longitude?: number;
  onLocationChange?: (lat: number, lng: number) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ 
  latitude = 40.7128, 
  longitude = -74.006,
  onLocationChange 
}) => {
  const [coords, setCoords] = useState({ lat: latitude, lng: longitude });
  const [showMap, setShowMap] = useState(false);
  const markerRef = useRef(null);

  const handleDragEnd = () => {
    const marker = markerRef.current as any;
    if (marker != null) {
      const { lat, lng } = marker.getLatLng();
      const newCoords = { lat: parseFloat(lat.toFixed(6)), lng: parseFloat(lng.toFixed(6)) };
      setCoords(newCoords);
      onLocationChange?.(newCoords.lat, newCoords.lng);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <FormLabel>Coordinates (Latitude, Longitude)</FormLabel>

      <div className="relative w-full">
        <Input
          type="text"
          value={`${coords.lat}, ${coords.lng}`}
          onChange={(e) => {
            const [lat, lng] = e.target.value.split(",").map((s) => s.trim());
            const latNum = parseFloat(lat);
            const lngNum = parseFloat(lng);
            if (!isNaN(latNum) && !isNaN(lngNum)) {
              setCoords({ lat: latNum, lng: lngNum });
              onLocationChange?.(latNum, lngNum);
            }
          }}
          placeholder="Latitude, Longitude"
          className=" border-b border-b-[#7E22CE] p-2 pr-10 w-full"
        />
        <button
          type="button"
          onClick={() => setShowMap(!showMap)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
          title="Select location from map"
        >
          <FaMapMarkerAlt className="text-red-500 text-lg cursor-pointer" />
        </button>
      </div>

      {/* Map below input */}
      {showMap && (
        <div className="w-full h-80 mt-2 border border-gray-200 shadow">
          <MapContainer
            center={[coords.lat, coords.lng]}
            zoom={12}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              draggable={true}
              eventHandlers={{ dragend: handleDragEnd }}
              position={[coords.lat, coords.lng]}
              ref={markerRef}
            />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
