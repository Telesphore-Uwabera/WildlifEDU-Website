import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // 8-second interval

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading conservation biologist with 15+ years of experience in African wildlife protection."
    },
    {
      name: "Prof. Michael Chen",
      role: "Chief Education Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Marine biologist and educator passionate about ocean conservation and community engagement."
    },
    {
      name: "Dr. Emma Williams",
      role: "Director of Field Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Safari guide trainer and wildlife expert with extensive field experience across Africa."
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Community Outreach Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Specialist in community-based conservation and sustainable development initiatives."
    }
  ];

  const stats = [
    { number: "500+", label: "Students Enrolled", icon: "🎓" },
    { number: "25+", label: "Expert Instructors", icon: "👨‍🏫" },
    { number: "50+", label: "Conservation Partners", icon: "🤝" },
    { number: "1000+", label: "Hours of Content", icon: "📚" }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-background">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1>About CareAfrica</h1>
          <p>Empowering communities through wildlife conservation education and sustainable development</p>
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
        <section className="mission-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>CareAfrica is dedicated to preserving Africa's rich biodiversity through comprehensive education, community engagement, and sustainable conservation practices. We believe that knowledge is the foundation of lasting change.</p>
            <div className="mission-cards">
              <div className="mission-card">
                <div className="card-icon">🌍</div>
                <h3>Conservation</h3>
                <p>Protecting wildlife habitats and endangered species through education and community involvement.</p>
              </div>
              <div className="mission-card">
                <div className="card-icon">🎓</div>
                <h3>Education</h3>
                <p>Providing accessible, high-quality conservation education to students worldwide.</p>
              </div>
              <div className="mission-card">
                <div className="card-icon">🤝</div>
                <h3>Community</h3>
                <p>Building strong partnerships with local communities for sustainable conservation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section">
          <div className="section-content">
            <h2>Our Story</h2>
            <div className="story-content">
              <div className="story-text">
                <p>Founded in 2020, CareAfrica emerged from a deep concern about the rapid decline of African wildlife and the urgent need for conservation education. Our founders, experienced conservationists and educators, recognized that traditional approaches weren't reaching enough people.</p>
                <p>We started with a simple vision: to make wildlife conservation education accessible to everyone, everywhere. Through our online platform, we've created a global community of conservation enthusiasts, professionals, and students who share our passion for protecting Africa's natural heritage.</p>
                <p>Today, CareAfrica has grown into a comprehensive educational platform, partnering with leading conservation organizations, universities, and field experts to deliver world-class conservation education.</p>
              </div>
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="CareAfrica Team" />
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="section-content">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="section-content">
            <h2>Our Leadership Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="section-content">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>🌱 Sustainability</h3>
                <p>We promote practices that ensure long-term environmental health and community well-being.</p>
              </div>
              <div className="value-card">
                <h3>🎯 Excellence</h3>
                <p>We maintain the highest standards in our educational content and conservation practices.</p>
              </div>
              <div className="value-card">
                <h3>🤝 Collaboration</h3>
                <p>We believe in the power of partnerships and community-driven conservation efforts.</p>
              </div>
              <div className="value-card">
                <h3>💡 Innovation</h3>
                <p>We embrace new technologies and approaches to advance conservation education.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-content">
            <h2>Join Our Mission</h2>
            <p>Be part of the solution. Enroll in our courses, join our community, and help us protect Africa's wildlife for future generations.</p>
            <div className="cta-buttons">
              <Link to="/courses" className="cta-btn primary">Explore Courses</Link>
              <Link to="/contact" className="cta-btn secondary">Get in Touch</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
