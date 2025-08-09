import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of wildlife background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
  ];

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-background">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1>Welcome to CareAfrica</h1>
          <p>Empowering Wildlife Conservation Through Education</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link to="/forum" className="btn btn-secondary">Join Community</Link>
          </div>
        </div>
        <div className="hero-indicators">
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              className={`hero-indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🦁</div>
            <h3>Wildlife Courses</h3>
            <p>Learn about endangered species and conservation efforts through our comprehensive online courses.</p>
            <Link to="/courses" className="feature-link">Browse Courses →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Community Forum</h3>
            <p>Connect with conservationists and wildlife enthusiasts from around the world.</p>
            <Link to="/forum" className="feature-link">Join Discussion →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💚</div>
            <h3>Make a Difference</h3>
            <p>Support wildlife conservation through education and community engagement.</p>
            <Link to="/contact" className="feature-link">Get Involved →</Link>
          </div>
        </div>

        <div className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Conservation Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Community Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <div className="testimonials-section">
          <h2>What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The wildlife conservation course opened my eyes to the importance of protecting our planet's biodiversity. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🔬</div>
                <div>
                  <div className="author-name">Dr. Sarah Johnson</div>
                  <div className="author-title">Conservation Biologist</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The community forum is amazing! I've connected with like-minded conservationists and learned so much from their experiences."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍🌾</div>
                <div>
                  <div className="author-name">Michael Chen</div>
                  <div className="author-title">Environmental Educator</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"CareAfrica has transformed my understanding of wildlife conservation. The courses are well-structured and engaging."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🎓</div>
                <div>
                  <div className="author-name">Emma Williams</div>
                  <div className="author-title">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Start Your Conservation Journey?</h2>
            <p>Join thousands of conservationists and wildlife enthusiasts who are making a difference.</p>
            <div className="cta-buttons">
              <Link to="/courses" className="btn btn-primary">Start Learning</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
