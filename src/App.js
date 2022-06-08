import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";
import icon from "./constants";
import  { data, lineOptions } from './graph/LineGraph';
import { Line } from "react-chartjs-2";
import "./App.css"


const LeafletgeoSearch = () => {
  const map = useMap();
  map.invalidateSize();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      marker: {
        icon,
      },
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
};
const App = () => {

  return (

    <div id="map" style={{ height: "100vh" }}>
      <MapContainer style={{height: "100%"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <LeafletgeoSearch />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className='app__graph'>
      <Line data={data} options={lineOptions} />
      </div>


    </div>
  );
}

export default App;
