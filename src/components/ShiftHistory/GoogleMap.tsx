"use client";

import React, { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";

interface GoogleMapProps {
  geocode: string;
  width?: string;
  height?: string;
  onGeocodeChange?: (newGeocode: string) => void;
  disabled?: boolean;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  geocode,
  width = "100%",
  height = "210.96px",
  onGeocodeChange,
  disabled = true,
}) => {
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<Marker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import of Leaflet
    const initializeMap = async () => {
      if (!mapContainerRef.current) return;

      const L = (await import("leaflet")).default;

      // Fix for marker icon
      const defaultIcon = L.icon({
        iconUrl: "/Images/marker-icon.png",
        shadowUrl: "/Images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.Marker.prototype.options.icon = defaultIcon;

      // Initialize map
      if (!mapRef.current) {
        mapRef.current = L.map(mapContainerRef.current).setView([0, 0], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapRef.current);

        // Add click handler if not disabled
        if (!disabled) {
          mapRef.current.on("click", (e: L.LeafletMouseEvent) => {
            const { lat, lng } = e.latlng;
            if (onGeocodeChange) {
              onGeocodeChange(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
            }
            // Remove existing marker if any
            if (markerRef.current) {
              markerRef.current.remove();
            }
            // Add new marker without panning
            markerRef.current = L.marker([lat, lng], {
              draggable: !disabled,
              title: "Location marker",
            }).addTo(mapRef.current!);

            // Add drag end event to update coordinates when marker is dragged
            if (!disabled) {
              markerRef.current.on("dragend", function (event) {
                const marker = event.target;
                const position = marker.getLatLng();
                if (onGeocodeChange) {
                  onGeocodeChange(
                    `${position.lat.toFixed(6)}, ${position.lng.toFixed(6)}`
                  );
                }
              });
            }
          });

          // Add cursor style handlers
          mapRef.current.on("dragstart", () => {
            if (mapContainerRef.current) {
              mapContainerRef.current.style.cursor = "grabbing";
            }
          });

          mapRef.current.on("dragend", () => {
            if (mapContainerRef.current) {
              mapContainerRef.current.style.cursor = "grab";
            }
          });

          // Set initial grab cursor
          if (mapContainerRef.current) {
            mapContainerRef.current.style.cursor = "grab";
          }
        }
      }

      // Update marker position when geocode changes
      if (geocode && mapRef.current) {
        const [lat, lng] = geocode
          .split(",")
          .map((coord) => parseFloat(coord.trim()));
        if (!isNaN(lat) && !isNaN(lng)) {
          // Only set view if no marker exists (initial load)
          if (!markerRef.current) {
            mapRef.current.setView([lat, lng], 13);
          }
          // Remove existing marker if any
          if (markerRef.current) {
            markerRef.current.remove();
          }
          // Add new marker
          markerRef.current = L.marker([lat, lng], {
            draggable: !disabled,
            title: "Location marker",
          }).addTo(mapRef.current);

          // Add drag end event to update coordinates when marker is dragged
          if (!disabled) {
            markerRef.current.on("dragend", function (event) {
              const marker = event.target;
              const position = marker.getLatLng();
              if (onGeocodeChange) {
                onGeocodeChange(
                  `${position.lat.toFixed(6)}, ${position.lng.toFixed(6)}`
                );
              }
            });
          }
        }
      }
    };

    initializeMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markerRef.current = null;
      }
    };
  }, [geocode, disabled, onGeocodeChange]);

  return (
    <div
      className={`relative rounded-[3px] overflow-hidden ${
        disabled ? "pointer-events-none" : ""
      }`}
      style={{ width, height }}
    >
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
