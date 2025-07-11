// UI card for itinerary view
import React from "react";

function ItineraryPlaceCard({ place, onRemove }) {
  return (
    <div className="place-card">
      <img src={place.image} alt={place.name} className="place-card-img" />
      <div className="place-card-content">
        <h4>{place.name}</h4>
        <p>{place.description}</p>
        <button className="remove-btn" onClick={() => onRemove(place.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItineraryPlaceCard;
