// Recommendation list – loads async data via service
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import { fetchAllPlaces } from '../services/placeService';

function RecommendationPage() {
  const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem('selectedPlaces') || '[]')
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPlaces().then(setPlaces);
  }, []);

  const addPlace = (place) => {
    const newSel = [...selected, {
      id: place.id,
      name: place.get('name'),
      description: place.get('description'),
      image: place.get('image')
    }];
    setSelected(newSel);
    localStorage.setItem('selectedPlaces', JSON.stringify(newSel));
  };

  return (
    <>
      <header className="header">
        <h1>Recommended Places</h1>
        <button
          className="view-itinerary-btn"
          onClick={() => navigate('/itinerary')}
        >
          View My Itinerary ({selected.length})
        </button>
      </header>

      <main>
        <div id="recommendation-list">
          {places.map(p => (
            <PlaceCard
              key={p.id}
              place={p}
              onAdd={addPlace}
              disabled={selected.some(sp => sp.id === p.id)}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default RecommendationPage;
