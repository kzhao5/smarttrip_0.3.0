// Itinerary page – shows saved trip + places
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItineraryPlaceCard from "../components/ItineraryPlaceCard";

function ItineraryPage() {
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setTrip(JSON.parse(localStorage.getItem("tripInfo") || "null"));
    setPlaces(JSON.parse(localStorage.getItem("selectedPlaces") || "[]"));
  }, []);

  const removePlace = (id) => {
    const rest = places.filter((p) => p.id !== id);
    setPlaces(rest);
    localStorage.setItem("selectedPlaces", JSON.stringify(rest));
  };

  if (!trip) {
    return (
      <p>
        No trip found. <button onClick={() => navigate("/")}>Go Home</button>
      </p>
    );
  }

  return (
    <main className="itinerary-section">
      <div className="itinerary-header">
        <h2>Your Trip to {trip.destination}</h2>
        <p>
          {trip.startDate} – {trip.endDate}
        </p>
        <p>Budget: ${trip.budget}</p>
      </div>

      <div className="itinerary-controls">
        <button
          className="back-btn"
          onClick={() => navigate("/recommendations")}
        >
          ← Back to Recommendations
        </button>
      </div>

      <div className="places-list">
        {places.length ? (
          places.map((p) => (
            <ItineraryPlaceCard key={p.id} place={p} onRemove={removePlace} />
          ))
        ) : (
          <p>No places selected yet.</p>
        )}
      </div>
    </main>
  );
}

export default ItineraryPage;
