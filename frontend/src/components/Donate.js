import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Donate.css';

function Donate() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [isProcessing, setIsProcessing] = useState(false);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // 6-second interval

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const donationAmounts = [25, 50, 100, 250, 500];
  const impactStories = [
    {
      title: "Elephant Protection Program",
      description: "Your donation helps protect endangered elephants from poaching and habitat loss.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "Protected 50+ elephants",
      amount: "$25"
    },
    {
      title: "Community Education",
      description: "Supporting local communities with conservation education and sustainable practices.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "Educated 200+ students",
      amount: "$50"
    },
    {
      title: "Marine Conservation",
      description: "Protecting marine ecosystems and endangered sea species in African waters.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "Protected 1000+ marine species",
      amount: "$100"
    }
  ];

  const handleDonation = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Thank you for your donation! Your contribution will make a real difference in wildlife conservation.');
    }, 2000);
  };

  const getFinalAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  return (
    <div className="donate-page">
      <div className="donate-hero">
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
          <h1>Support Wildlife Conservation</h1>
          <p>Your donation helps protect Africa's wildlife and educate communities for a sustainable future</p>
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
        <div className="donate-content">
          <div className="donation-form-section">
            <div className="donation-form">
              <h2>Make a Donation</h2>
              <p>Choose an amount and help us protect Africa's wildlife</p>
              
              <form onSubmit={handleDonation}>
                <div className="donation-type">
                  <label>
                    <input
                      type="radio"
                      name="donationType"
                      value="one-time"
                      checked={donationType === 'one-time'}
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    One-time Donation
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={donationType === 'monthly'}
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    Monthly Donation
                  </label>
                </div>

                <div className="amount-selection">
                  <h3>Select Amount</h3>
                  <div className="amount-buttons">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="custom-amount">
                    <label>Or enter a custom amount:</label>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      min="1"
                    />
                  </div>
                </div>

                <div className="donation-summary">
                  <h3>Donation Summary</h3>
                  <div className="summary-item">
                    <span>Amount:</span>
                    <span>${getFinalAmount()}</span>
                  </div>
                  <div className="summary-item">
                    <span>Type:</span>
                    <span>{donationType === 'monthly' ? 'Monthly' : 'One-time'}</span>
                  </div>
                  <div className="summary-total">
                    <span>Total:</span>
                    <span>${getFinalAmount()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="donate-btn"
                  disabled={isProcessing || !getFinalAmount()}
                >
                  {isProcessing ? 'Processing...' : `Donate $${getFinalAmount()}`}
                </button>
              </form>
            </div>
          </div>

          <div className="impact-section">
            <h2>Your Impact</h2>
            <div className="impact-stories">
              {impactStories.map((story, index) => (
                <div key={index} className="impact-card">
                  <div className="impact-image">
                    <img src={story.image} alt={story.title} />
                  </div>
                  <div className="impact-content">
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                    <div className="impact-metrics">
                      <span className="impact-number">{story.impact}</span>
                      <span className="impact-amount">Starting at {story.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h2>Our Conservation Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🦁</div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Wildlife Protected</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Acres Protected</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Community Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Educated</div>
            </div>
          </div>
        </div>

        <div className="transparency-section">
          <h2>Transparency & Accountability</h2>
          <div className="transparency-grid">
            <div className="transparency-card">
              <div className="card-icon">📊</div>
              <h3>Financial Reports</h3>
              <p>We publish detailed financial reports showing how every dollar is spent on conservation efforts.</p>
            </div>
            <div className="transparency-card">
              <div className="card-icon">📈</div>
              <h3>Impact Tracking</h3>
              <p>Regular updates on conservation projects and measurable outcomes of our programs.</p>
            </div>
            <div className="transparency-card">
              <div className="card-icon">🔍</div>
              <h3>Third-Party Audits</h3>
              <p>Independent audits ensure accountability and proper use of donor funds.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Other Ways to Support</h2>
          <div className="support-options">
            <Link to="/courses" className="support-card">
              <div className="card-icon">📚</div>
              <h3>Enroll in Courses</h3>
              <p>Learn about wildlife conservation and support our educational mission.</p>
            </Link>
            <Link to="/forum" className="support-card">
              <div className="card-icon">💬</div>
              <h3>Join Our Community</h3>
              <p>Connect with fellow conservation enthusiasts and share knowledge.</p>
            </Link>
            <Link to="/contact" className="support-card">
              <div className="card-icon">📧</div>
              <h3>Volunteer</h3>
              <p>Get involved in our conservation projects and make a hands-on difference.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
