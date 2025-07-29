"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation, Phone, Clock } from "lucide-react"

interface GoogleMapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  height?: string
  className?: string
}

export function GoogleMap({
  center = { lat: 39.7817, lng: -89.6501 }, // Springfield, IL coordinates
  zoom = 15,
  height = "500px",
  className = "",
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Google Maps API
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setIsLoaded(true)
        return
      }

      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => setIsLoaded(true)
      document.head.appendChild(script)
    }

    loadGoogleMaps()
  }, [])

  useEffect(() => {
    if (isLoaded && mapRef.current && !map) {
      // Initialize the map
      const googleMap = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#1a1a1a" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#1a1a1a" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#f59e0b" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_CENTER,
        },
      })

      // Create custom marker
      const marker = new window.google.maps.Marker({
        position: center,
        map: googleMap,
        title: "BrassCraft Manufacturing",
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "#f59e0b",
          fillOpacity: 1,
          strokeColor: "#3b82f6",
          strokeWeight: 3,
        },
      })

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 16px; font-family: system-ui, -apple-system, sans-serif; color: #1f2937; min-width: 280px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b, #3b82f6); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 style="margin: 0; font-size: 18px; font-weight: bold; color: #111827;">BrassCraft Manufacturing</h3>
                <p style="margin: 0; font-size: 14px; color: #6b7280;">Premium Brass Window Brackets</p>
              </div>
            </div>
            <div style="space-y: 8px;">
              <p style="margin: 4px 0; font-size: 14px; color: #374151;">
                <strong>📍 Address:</strong><br>
                1234 Industrial Drive<br>
                Springfield, ST 12345
              </p>
              <p style="margin: 4px 0; font-size: 14px; color: #374151;">
                <strong>📞 Phone:</strong> (555) 123-4567
              </p>
              <p style="margin: 4px 0; font-size: 14px; color: #374151;">
                <strong>🕒 Hours:</strong> Mon-Fri 8AM-5PM
              </p>
              <div style="margin-top: 12px;">
                <a href="https://maps.google.com/?q=1234+Industrial+Drive+Springfield+ST+12345" 
                   target="_blank" 
                   style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #3b82f6); color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 14px;">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        `,
      })

      // Show info window on marker click
      marker.addListener("click", () => {
        infoWindow.open(googleMap, marker)
      })

      // Auto-open info window after a delay
      setTimeout(() => {
        infoWindow.open(googleMap, marker)
      }, 1000)

      setMap(googleMap)
    }
  }, [isLoaded, center, zoom, map])

  if (!isLoaded) {
    return (
      <div
        className={`bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl flex items-center justify-center ${className}`}
        style={{ height }}
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading interactive map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-gray-800 ${className}`}>
      <div ref={mapRef} style={{ height, width: "100%" }} className="relative z-10" />

      {/* Map Controls Overlay */}
      <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-amber-400/30 max-w-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-r from-amber-400 to-blue-400 rounded-lg">
            <MapPin className="h-4 w-4 text-black" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">BrassCraft Manufacturing</h3>
            <p className="text-gray-400 text-xs">Premium Brass Brackets</p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-3 w-3 text-amber-400" />
            <span>1234 Industrial Drive</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="h-3 w-3 text-amber-400" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="h-3 w-3 text-amber-400" />
            <span>Mon-Fri 8AM-5PM</span>
          </div>
        </div>

        <button
          onClick={() => window.open("https://maps.google.com/?q=1234+Industrial+Drive+Springfield+ST+12345", "_blank")}
          className="mt-3 w-full bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Navigation className="h-3 w-3" />
          Get Directions
        </button>
      </div>
    </div>
  )
}
