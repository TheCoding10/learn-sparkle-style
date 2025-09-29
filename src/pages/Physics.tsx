// Safe import of Physics.css (make sure Physics.css is in the same folder)
import "./Physics.css";

export default function Physics() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <a href="/" className="logo">
          <div className="logo-icon">P</div>
          MemoLearning
        </a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <a href="/signin" className="sign-in">Sign In</a>
        </div>
      </nav>

      {/* Back Link */}
      <a href="/" className="back-link">
        ← Back to Homepage
      </a>

      {/* Hero Section */}
      <div className="hero">
        <h1>
          Master <span className="highlight">Physics</span>
        </h1>
        <p>
          Master the laws of the universe — from mechanics to quantum physics —
          with structured, clear lessons designed for deep understanding.
        </p>
      </div>

      {/* Courses Section */}
      <div className="courses-section">
        <div className="section-header">
          <h2 className="section-title">Physics Courses</h2>
          <p className="section-subtitle">
            Start your physics journey with foundational mechanics
          </p>
        </div>

        <div className="course-grid">
          <a href="/classical-mechanics" className="course-card">
            <h3>Classical Mechanics</h3>
            <p>Motion, Newton’s laws, energy, and momentum.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
