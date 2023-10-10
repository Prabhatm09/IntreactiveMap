import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CustomMap() {
  const markers = [
    { id: 1, region: "US", data: 290, lat: 37.0902, lng: -95.7129 },
    { id: 2, region: "US", data: 490, lat: 37.0902, lng: -95.7129 },
    { id: 3, region: "AT", data: 790, lat: 47.5162, lng: 14.5501 },
    { id: 4, region: "SE", data: 590, lat: 60.1282, lng: 18.6435 },
    { id: 5, region: "AT", data: 290, lat: 47.5162, lng: 14.5501 },
    { id: 6, region: "SE", data: 390, lat: 60.1282, lng: 18.6435 },
  ];

  return (
    <div className="App" style={{ height: "100vh" }}>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Circle
            key={marker.id}
            center={[marker.lat, marker.lng]}
            radius={marker.data * 100}
            color="blue"
            fillColor="blue"
            fillOpacity={0.4}
          >
            <Popup>{`Region: ${marker.region}, Data: ${marker.data}`}</Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}
