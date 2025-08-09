import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

function Courses() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [coursesToShow, setCoursesToShow] = useState(6);
  
  // Array of wildlife background images for courses page
  const backgroundImages = [
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
  ];

  // Change background image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  const [courses] = useState([
    {
      id: 1,
      title: "Wildlife Conservation Fundamentals",
      description: "Learn the basics of wildlife conservation, ecosystem management, and species protection strategies.",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      level: "Beginner",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Ecosystem Basics", "Species Identification", "Conservation Methods"]
    },
    {
      id: 2,
      title: "Marine Life Protection",
      description: "Explore marine ecosystems, ocean conservation, and marine species protection techniques.",
      instructor: "Prof. Michael Chen",
      duration: "10 weeks",
      level: "Intermediate",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Marine Ecosystems", "Ocean Conservation", "Marine Species"]
    },
    {
      id: 3,
      title: "African Wildlife Safari Guide",
      description: "Comprehensive guide to African wildlife, their habitats, and conservation challenges.",
      instructor: "Dr. Emma Williams",
      duration: "12 weeks",
      level: "Advanced",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["African Wildlife", "Habitat Management", "Conservation Challenges"]
    },
    {
      id: 4,
      title: "Climate Change & Wildlife",
      description: "Understanding the impact of climate change on wildlife and conservation strategies.",
      instructor: "Dr. Robert Kim",
      duration: "6 weeks",
      level: "Intermediate",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Climate Impact", "Adaptation Strategies", "Global Conservation"]
    },
    {
      id: 5,
      title: "Community-Based Conservation",
      description: "Learn how to engage local communities in wildlife conservation and sustainable development.",
      instructor: "Dr. Maria Rodriguez",
      duration: "8 weeks",
      level: "Intermediate",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Community Engagement", "Sustainable Development", "Local Partnerships"]
    },
    {
      id: 6,
      title: "Wildlife Photography & Documentation",
      description: "Master the art of wildlife photography for conservation documentation and awareness.",
      instructor: "Prof. David Thompson",
      duration: "6 weeks",
      level: "Beginner",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Photography Techniques", "Documentation", "Conservation Storytelling"]
    },
    {
      id: 7,
      title: "Elephant Conservation & Management",
      description: "Specialized course on elephant behavior, conservation challenges, and management strategies.",
      instructor: "Dr. James Wilson",
      duration: "10 weeks",
      level: "Advanced",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Elephant Behavior", "Poaching Prevention", "Habitat Protection"]
    },
    {
      id: 8,
      title: "Wildlife Veterinary Care",
      description: "Introduction to wildlife veterinary medicine and emergency care for conservation professionals.",
      instructor: "Dr. Lisa Anderson",
      duration: "12 weeks",
      level: "Advanced",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Veterinary Medicine", "Emergency Care", "Wildlife Health"]
    },
    {
      id: 9,
      title: "Conservation Policy & Law",
      description: "Understanding wildlife protection laws, international treaties, and policy development.",
      instructor: "Prof. Amanda Foster",
      duration: "8 weeks",
      level: "Intermediate",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Wildlife Law", "International Treaties", "Policy Development"]
    },
    {
      id: 10,
      title: "Ecotourism & Sustainable Tourism",
      description: "Learn how to develop and manage sustainable tourism that benefits wildlife conservation.",
      instructor: "Dr. Carlos Mendez",
      duration: "6 weeks",
      level: "Beginner",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Sustainable Tourism", "Ecotourism", "Community Benefits"]
    },
    {
      id: 11,
      title: "Wildlife Research Methods",
      description: "Master scientific research techniques for wildlife studies and conservation monitoring.",
      instructor: "Dr. Rachel Green",
      duration: "10 weeks",
      level: "Advanced",
      price: 74.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Research Methods", "Data Collection", "Statistical Analysis"]
    },
    {
      id: 12,
      title: "Bird Conservation & Ornithology",
      description: "Comprehensive study of bird species, their conservation needs, and protection strategies.",
      instructor: "Prof. Thomas Brown",
      duration: "8 weeks",
      level: "Intermediate",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Ornithology", "Bird Conservation", "Habitat Protection"]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || course.level.toLowerCase() === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const handleEnroll = (courseId) => {
    navigate(`/enroll/${courseId}`);
  };

  const handleViewMore = () => {
    setCoursesToShow(prev => prev + 6);
  };

  const visibleCourses = filteredCourses.slice(0, coursesToShow);
  const hasMoreCourses = filteredCourses.length > coursesToShow;

  return (
    <div className="courses-page">
      <div className="courses-hero">
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
          <h1>Wildlife Conservation Courses</h1>
          <p>Expand your knowledge and make a difference in wildlife conservation</p>
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
        <div className="courses-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            <button
              className={filterLevel === 'all' ? 'active' : ''}
              onClick={() => setFilterLevel('all')}
            >
              All Levels
            </button>
            <button
              className={filterLevel === 'beginner' ? 'active' : ''}
              onClick={() => setFilterLevel('beginner')}
            >
              Beginner
            </button>
            <button
              className={filterLevel === 'intermediate' ? 'active' : ''}
              onClick={() => setFilterLevel('intermediate')}
            >
              Intermediate
            </button>
            <button
              className={filterLevel === 'advanced' ? 'active' : ''}
              onClick={() => setFilterLevel('advanced')}
            >
              Advanced
            </button>
          </div>
        </div>

        <div className="courses-grid">
          {visibleCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{course.level}</div>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span><strong>Instructor:</strong> {course.instructor}</span>
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
                <div className="course-topics">
                  {course.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">{topic}</span>
                  ))}
                </div>
                <div className="course-footer">
                  <span className="course-price">${course.price}</span>
                  <button 
                    className="enroll-btn"
                    onClick={() => handleEnroll(course.id)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreCourses && (
          <div className="view-more-container">
            <button className="view-more-btn" onClick={handleViewMore}>
              View More Courses
            </button>
          </div>
        )}

        {filteredCourses.length === 0 && (
          <div className="no-courses">
            <h3>No courses found</h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
