// UI card for a single place
import React from "react";

function PlaceCard({ place, onAdd, disabled }) {
  return (
    <div className="place-card">
      <img
        src={place.get("image")}
        alt={place.get("name")}
        className="card-img"
      />
      <div className="place-card-content">
        <h3>{place.get("name")}</h3>
        <p>{place.get("description")}</p>
        <button
          className="add-btn"
          onClick={() => onAdd(place)}
          disabled={disabled}
        >
          {disabled ? "✓ Added" : "Add to Itinerary"}
        </button>
      </div>
    </div>
  );
}

export default PlaceCard;
