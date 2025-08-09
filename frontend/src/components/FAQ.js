import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // 7-second interval

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const toggleQuestion = (questionId) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const faqData = {
    general: [
      {
        id: 'general-1',
        question: "What is CareAfrica?",
        answer: "CareAfrica is a comprehensive online platform dedicated to wildlife conservation education. We offer courses, community forums, and resources to empower individuals and communities to protect African wildlife and their habitats."
      },
      {
        id: 'general-2',
        question: "Who can enroll in CareAfrica courses?",
        answer: "Our courses are open to anyone interested in wildlife conservation, from beginners to advanced professionals. Whether you're a student, conservationist, tour guide, or simply passionate about wildlife, you'll find courses suitable for your level."
      },
      {
        id: 'general-3',
        question: "Are the courses accredited?",
        answer: "Yes, our courses are developed in collaboration with leading conservation organizations and universities. Upon completion, you'll receive a certificate that's recognized by conservation institutions worldwide."
      },
      {
        id: 'general-4',
        question: "How long do I have access to the courses?",
        answer: "You have lifetime access to all courses you enroll in. You can revisit the content anytime, and we regularly update our courses with the latest conservation research and practices."
      }
    ],
    courses: [
      {
        id: 'courses-1',
        question: "What types of courses do you offer?",
        answer: "We offer a wide range of courses including Wildlife Conservation Fundamentals, Marine Life Protection, African Wildlife Safari Guide, Climate Change & Wildlife, Community-Based Conservation, Wildlife Photography, Elephant Conservation, Veterinary Care, Conservation Policy, Ecotourism, Research Methods, and Bird Conservation."
      },
      {
        id: 'courses-2',
        question: "How long are the courses?",
        answer: "Course durations vary from 6 to 12 weeks, depending on the complexity and depth of the subject matter. Each course is designed to be flexible, allowing you to learn at your own pace."
      },
      {
        id: 'courses-3',
        question: "Do I need any prerequisites to enroll?",
        answer: "Most of our beginner courses require no prerequisites. Intermediate and advanced courses may recommend prior knowledge or experience in conservation. Check individual course descriptions for specific requirements."
      },
      {
        id: 'courses-4',
        question: "What's included in each course?",
        answer: "Each course includes video lectures, reading materials, interactive assignments, quizzes, discussion forums, and access to expert instructors. You'll also receive downloadable resources and certificates upon completion."
      }
    ],
    enrollment: [
      {
        id: 'enrollment-1',
        question: "How do I enroll in a course?",
        answer: "Browse our course catalog, select the course you're interested in, and click 'Enroll Now'. You'll be guided through a simple registration and payment process. Once completed, you'll have immediate access to your course."
      },
      {
        id: 'enrollment-2',
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners. We also offer installment plans for some courses."
      },
      {
        id: 'enrollment-3',
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your course within 30 days of enrollment, contact our support team for a full refund."
      },
      {
        id: 'enrollment-4',
        question: "Do you offer discounts or scholarships?",
        answer: "Yes, we offer discounts for students, conservation professionals, and bulk enrollments. We also have scholarship programs for individuals from developing countries and those working in conservation."
      }
    ],
    technical: [
      {
        id: 'technical-1',
        question: "What devices can I use to access courses?",
        answer: "Our platform is compatible with desktop computers, laptops, tablets, and smartphones. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for the best experience."
      },
      {
        id: 'technical-2',
        question: "Do I need a stable internet connection?",
        answer: "Yes, you'll need a stable internet connection to access course content. We recommend a minimum speed of 2 Mbps for smooth video streaming. You can also download some content for offline viewing."
      },
      {
        id: 'technical-3',
        question: "Can I download course materials?",
        answer: "Yes, most course materials including PDFs, presentations, and some videos can be downloaded for offline access. This is especially useful for areas with limited internet connectivity."
      },
      {
        id: 'technical-4',
        question: "How do I contact technical support?",
        answer: "You can contact our technical support team through the contact form on our website, email us at support@careafrica.com, or use the live chat feature available during business hours."
      }
    ],
    community: [
      {
        id: 'community-1',
        question: "How can I connect with other students?",
        answer: "Join our community forum where you can discuss conservation topics, share experiences, ask questions, and network with fellow conservation enthusiasts from around the world."
      },
      {
        id: 'community-2',
        question: "Are there opportunities for field work?",
        answer: "Yes, we partner with conservation organizations to offer field work opportunities, internships, and volunteer programs. These are announced through our platform and newsletter."
      },
      {
        id: 'community-3',
        question: "Can I contribute to the community forum?",
        answer: "Absolutely! We encourage all members to share their knowledge, experiences, and insights. You can post articles, ask questions, respond to others, and participate in discussions."
      },
      {
        id: 'community-4',
        question: "Do you organize events or webinars?",
        answer: "Yes, we regularly host webinars, virtual conferences, and networking events featuring conservation experts and practitioners. These are free for enrolled students and announced in advance."
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General', icon: '🏠' },
    { id: 'courses', name: 'Courses', icon: '📚' },
    { id: 'enrollment', name: 'Enrollment', icon: '🎓' },
    { id: 'technical', name: 'Technical', icon: '💻' },
    { id: 'community', name: 'Community', icon: '👥' }
  ];

  return (
    <div className="faq-page">
      <div className="faq-hero">
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
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about CareAfrica courses, enrollment, and wildlife conservation</p>
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
        <div className="faq-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqData[activeCategory].map((item) => (
              <div key={item.id} className="faq-item">
                <button
                  className={`faq-question ${openQuestions.has(item.id) ? 'active' : ''}`}
                  onClick={() => toggleQuestion(item.id)}
                >
                  <span className="question-text">{item.question}</span>
                  <span className="toggle-icon">
                    {openQuestions.has(item.id) ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-answer ${openQuestions.has(item.id) ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="help-section">
              <h3>Still Need Help?</h3>
              <p>Can't find the answer you're looking for? Our support team is here to help!</p>
              <div className="help-options">
                <Link to="/contact" className="help-btn primary">
                  Contact Support
                </Link>
                <Link to="/forum" className="help-btn secondary">
                  Ask Community
                </Link>
              </div>
            </div>

            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/courses">Browse Courses</Link></li>
                <li><Link to="/forum">Community Forum</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
