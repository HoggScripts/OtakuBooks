
import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


function MapComponent() {
    
    const [viewport, setViewport] = React.useState({
        latitude: 44.6488,  
        longitude: -63.5752, 
        width: "100vw",
        height: "100vh",
        zoom: 13          
    });


    const [selectedStore, setSelectedStore] = React.useState(null);

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onViewportChange={newViewport => setViewport(prevViewport => ({...prevViewport, ...newViewport}))}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            dragPan={true} 
            touchZoomRotate={true} 
            className="map-container"
        >
            <Marker
                latitude={44.6425}
                longitude={-63.5787} 
            >
                <button
                    className="marker-btn"
                    onClick={e => {
                        e.preventDefault();
                        setSelectedStore("Otaku Books");
                    }}
                    aria-label="View details for Otaku Books"
                >
                    <img src="/marker-icon.png" alt="Store Icon" />
                </button>
            </Marker>

            {selectedStore && (
                <Popup
                    latitude={44.6425}
                    longitude={-63.5787}
                    onClose={() => {
                        setSelectedStore(null);
                    }}
                    className="" 
                >
                    <div>
                        <h2>{selectedStore}</h2>
                        <p>Exciting comics just around the corner!</p>
                    </div>
                </Popup>
            )}
        </ReactMapGL>
    );
}

export default MapComponent;

