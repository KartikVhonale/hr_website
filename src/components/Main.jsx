import React from 'react';
import '../css/Main.css';

const Main = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing products and services that will transform your experience</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Service</h3>
            <p>We provide top-notch service to all our customers</p>
          </div>
          <div className="feature-card">
            <h3>Expert Support</h3>
            <p>24/7 support from our experienced team</p>
          </div>
          <div className="feature-card">
            <h3>Innovation</h3>
            <p>Always staying ahead with the latest technology</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        <div className="content-container">
          <div className="content-text">
            <h2>Why Choose Us?</h2>
            <p>We are committed to providing the best solutions for your needs. Our team of experts works tirelessly to ensure your satisfaction.</p>
            <ul className="benefits-list">
              <li>Professional and dedicated team</li>
              <li>Innovative solutions</li>
              <li>Customer satisfaction guarantee</li>
              <li>Competitive pricing</li>
            </ul>
          </div>
          <div className="content-image">
            {/* Placeholder for image */}
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers today</p>
        <button className="cta-button">Contact Us</button>
      </section>
    </main>
  );
};

export default Main;
