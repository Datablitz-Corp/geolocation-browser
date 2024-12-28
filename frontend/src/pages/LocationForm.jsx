import React, { useState } from 'react';
import axios from 'axios';

const LocationForm = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const saveLocation = () => {
        const locationData = {
            latitude,
            longitude,
        };
        axios
            .post("http://localhost:8000/save-location/", locationData)
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.error("There was an error saving the location:", error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Location Tracker</h1>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={getLocation}>
                    Get Location
                </button>
                {latitude && longitude && (
                    <div className="mt-3">
                        <p>Latitude: {latitude}</p>
                        <p>Longitude: {longitude}</p>
                    </div>
                )}
            </div>
            <div className="mt-3">
                <button
                    className="btn btn-success"
                    onClick={saveLocation}
                    disabled={!latitude || !longitude}
                >
                    Save Location
                </button>
            </div>
        </div>
    );
};

export default LocationForm;
