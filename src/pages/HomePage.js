import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { destination, startDate, endDate, budget } = e.target.elements;
    const tripInfo = {
      destination: destination.value,
      startDate: startDate.value,
      endDate: endDate.value,
      budget: budget.value,
    };
    localStorage.setItem("tripInfo", JSON.stringify(tripInfo));
    navigate("/recommendations");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Discover Your Perfect Journey</h1>
          <p>
            Plan your dream trip with personalized recommendations and create
            unforgettable memories
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <main className="form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Start Planning Your Adventure</h2>
            <p>
              Tell us about your travel preferences and let us create the
              perfect itinerary for you
            </p>
          </div>

          <form id="tripForm" className="trip-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="destination">
                <span className="label-text">Destination</span>
                <input
                  id="destination"
                  name="destination"
                  placeholder="e.g. Paris, Tokyo, New York"
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">
                  <span className="label-text">Start Date</span>
                  <input id="startDate" type="date" name="startDate" required />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="endDate">
                  <span className="label-text">End Date</span>
                  <input id="endDate" type="date" name="endDate" required />
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="budget">
                <span className="label-text">Budget ($)</span>
                <input
                  id="budget"
                  type="number"
                  name="budget"
                  placeholder="1500"
                  min="100"
                  step="50"
                  required
                />
              </label>
            </div>

            <button type="submit" className="plan-btn">
              <span>Start Planning</span>
              <span className="btn-icon">✈️</span>
            </button>
          </form>

          <div className="form-footer">
            <p>🌟 Get personalized recommendations based on your preferences</p>
            <p>📅 Create detailed itineraries with timing suggestions</p>
            <p>💰 Stay within your budget with smart planning</p>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h3>Why Choose Our Travel Guide?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Personalized Recommendations</h4>
              <p>Get tailored suggestions based on your interests and budget</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗓️</div>
              <h4>Smart Itinerary Planning</h4>
              <p>Organize your trip with optimized schedules and locations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h4>Curated Experiences</h4>
              <p>Discover hidden gems and must-see attractions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
