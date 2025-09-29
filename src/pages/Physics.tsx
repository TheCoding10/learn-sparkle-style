import React from "react";
import "./physics.css";

export default function Physics() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Master <span className="highlight">Physics</span>
        </h1>
        <p>
          Master the laws of the universe—from mechanics to quantum physics—
          with structured, clear lessons.
        </p>
      </section>

      {/* Back to Homepage Link */}
      <a href="/" className="back-link">← Back to Homepage</a>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="section-header">
          <h2 className="section-title">Physics Courses</h2>
          <p className="section-subtitle">
            Start your physics journey step by step
          </p>
        </div>
        <div className="course-grid">
          <div className="course-card">
            <h3>Classical Mechanics</h3>
            <p>Motion, Newton's laws, energy, and momentum.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
