import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to CareAfrica</h1>
          <p>Empowering Wildlife Conservation Through Education</p>
          <button className="btn">Explore Courses</button>
        </div>
      </div>
      
      <div className="container">
        <div className="features">
          <div className="feature-card">
            <h3>🦁 Wildlife Courses</h3>
            <p>Learn about endangered species and conservation efforts</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Community Forum</h3>
            <p>Connect with conservationists and wildlife enthusiasts</p>
          </div>
          <div className="feature-card">
            <h3>💚 Make a Difference</h3>
            <p>Support wildlife conservation through education</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
