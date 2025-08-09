import React, { useState, useEffect } from 'react';
import './Forum.css';

function Forum() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of wildlife background images for forum page
  const backgroundImages = [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  // Change background image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Best Practices for Elephant Conservation",
      content: "I've been working on elephant conservation projects in Kenya for the past 5 years. Here are some key insights I've learned about protecting these magnificent creatures...",
      author: "Dr. Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "2024-01-15",
      likes: 24,
      comments: 8,
      tags: ["Elephants", "Conservation", "Kenya"],
      category: "Conservation"
    },
    {
      id: 2,
      title: "Marine Life Protection Success Stories",
      content: "Sharing some encouraging news from our marine conservation efforts. We've seen a 40% increase in coral reef health in the areas we've been monitoring...",
      author: "Prof. Michael Chen",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "2024-01-12",
      likes: 18,
      comments: 12,
      tags: ["Marine Life", "Coral Reefs", "Success Stories"],
      category: "Marine Conservation"
    },
    {
      id: 3,
      title: "Community-Based Conservation Programs",
      content: "We're launching a new community-based conservation program in Tanzania. The goal is to involve local communities in wildlife protection while also improving their livelihoods...",
      author: "Emma Williams",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: "2024-01-10",
      likes: 31,
      comments: 15,
      tags: ["Community", "Tanzania", "Programs"],
      category: "Community"
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    tags: ''
  });
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Conservation', 'Marine Conservation', 'Community', 'Research', 'Education'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewPost = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: "Current User",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: 0,
      tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      category: newPost.category
    };
    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', category: '', tags: '' });
    setShowNewPostForm(false);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="forum-page">
      <div className="forum-hero">
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
          <h1>Community Forum</h1>
          <p>Connect with fellow conservationists, share experiences, and learn from each other</p>
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
        <div className="forum-header">
          <div className="forum-filters">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filter">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button 
            className="new-post-btn"
            onClick={() => setShowNewPostForm(!showNewPostForm)}
          >
            {showNewPostForm ? 'Cancel' : 'New Post'}
          </button>
        </div>

        {showNewPostForm && (
          <div className="new-post-form">
            <h3>Create New Post</h3>
            <form onSubmit={handleNewPost}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.filter(cat => cat !== 'all').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  required
                  rows="6"
                />
              </div>
              <div className="form-group">
                <label>Tags (comma-separated)</label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                  placeholder="e.g., Conservation, Elephants, Kenya"
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Post</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowNewPostForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="posts-container">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="author-info">
                  <img src={post.authorAvatar} alt={post.author} className="author-avatar" />
                  <div>
                    <h4>{post.title}</h4>
                    <p className="author-name">by {post.author} • {post.date}</p>
                  </div>
                </div>
                <span className="category-badge">{post.category}</span>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="post-footer">
                <button 
                  className="like-btn"
                  onClick={() => handleLike(post.id)}
                >
                  👍 {post.likes}
                </button>
                <span className="comments-count">💬 {post.comments} comments</span>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <h3>No posts found</h3>
            <p>Try adjusting your search terms or filters, or be the first to start a discussion!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Forum;
