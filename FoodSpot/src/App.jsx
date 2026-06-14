import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useCallback, useRef, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import './App.css'

// 🔑 La API key se lee desde el archivo .env en la raíz del proyecto.
// Creá el archivo .env y agregá: VITE_GOOGLE_MAPS_API_KEY=tu_clave_aqui
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '500px',
  borderRadius: '12px',
}

const DEFAULT_CENTER = {
  lat: -34.6037,
  lng: -58.3816, // Buenos Aires como centro inicial
}

const DEFAULT_ZOOM = 13

function App() {
  const mapRef = useRef(null)
  const [markers, setMarkers] = useState([])
  const [mapLoaded, setMapLoaded] = useState(false)

  const onLoad = useCallback((map) => {
    mapRef.current = map
    setMapLoaded(true)
  }, [])

  const onUnmount = useCallback(() => {
    mapRef.current = null
  }, [])

  // Al hacer click en el mapa, agrega un marcador en esa posición
  const handleMapClick = useCallback((event) => {
    const newMarker = {
      id: Date.now(),
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
    setMarkers((prev) => [...prev, newMarker])
  }, [])

  return (
    <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '16px' }}>🍽️ FoodSpot</h1>

      <LoadScript googleMapsApiKey={API_KEY} onLoad={() => {}}>
        <GoogleMap
          mapContainerStyle={MAP_CONTAINER_STYLE}
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={handleMapClick}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {mapLoaded && (
        <p style={{ marginTop: '12px', fontSize: '14px', color: '#888' }}>
          Hacé click en el mapa para marcar un lugar 📍 — {markers.length} marcador(es)
        </p>
      )}
    </div>
  )
}

export default App