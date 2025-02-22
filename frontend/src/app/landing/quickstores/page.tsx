"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
interface PageProps {}

const Page = ({}: PageProps) => {
  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3082/3082383.png", // Replace with your image path
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  const customIcon2 = L.icon({
    iconUrl: "https://cdn-icons-png.freepik.com/256/869/869636.png?semt=ais_hybrid", // Replace with your image path
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });


  // mulitiple random location near it 

   const randomLocation =  [
    { lat: 10.9346, lng: 76.9587 },
    { lat: 10.9116, lng: 76.9187 },
    { lat: 10.9146, lng: 76.9167 },
    { lat: 10.4326, lng: 76.9537 },
    { lat: 10.9146, lng: 76.9927 },
   ]

  return (
    <div>
      <MapContainer
        style={{ height: "100vh", width: "100vw", zIndex: 0 }}
        center={[10.9346, 76.9787]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={customIcon} position={[10.9346, 76.9787]} >
             <Popup>
                Your Location
             </Popup>

        </Marker>
           {
             randomLocation.map((location) =>(

                <Marker icon={customIcon2} position={[location.lat, location.lng]} >
                     <Popup>
                         Store
                     </Popup>
                </Marker>
                ))}
      </MapContainer>
    </div>
  );
};

export default Page;
