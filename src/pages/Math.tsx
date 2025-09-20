// Safe import of Math.css (make sure Math.css is in the same folder)
import "./Math.css";

export default function Math() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <a href="/" className="logo">
          <div className="logo-icon">M</div>
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
          Master <span className="highlight">Mathematics</span>
        </h1>
        <p>
          Transform your mathematical understanding with our comprehensive track.
          From foundational concepts to advanced theory with interactive, engaging,
          and structured for success.
        </p>
      </div>

      {/* Courses Section */}
      <div className="courses-section" id="courses">
        <div className="section-header">
          <h2 className="section-title">Mathematics Courses</h2>
          <p className="section-subtitle">
            Choose your learning path and master mathematics step by step
          </p>
        </div>

        <div className="course-grid">
          <a href="/algebra1" className="course-card">
            <h3>Algebra I</h3>
            <p>Linear equations, inequalities, graphing, and introduction to quadratic functions.</p>
          </a>

          <a href="/geometry" className="course-card">
            <h3>Geometry</h3>
            <p>Properties of shapes, congruence, similarity, proofs, and coordinate geometry.</p>
          </a>

          <a href="/algebra2" className="course-card">
            <h3>Algebra II</h3>
            <p>Polynomials, rational expressions, logarithms, complex numbers, and conic sections.</p>
          </a>

          <a href="/trigonometry" className="course-card">
            <h3>Trigonometry</h3>
            <p>Trig functions, identities, unit circle, radian measure, and solving trig equations.</p>
          </a>

          <a href="/precalculus" className="course-card">
            <h3>Pre-Calculus</h3>
            <p>Advanced functions, trigonometry, sequences, and preparation for calculus.</p>
          </a>

          <a href="/calculus1" className="course-card">
            <h3>Calculus I</h3>
            <p>Limits, derivatives, and core applications of single-variable calculus.</p>
          </a>

          <a href="/calculus2" className="course-card">
            <h3>Calculus II</h3>
            <p>Integration techniques, series, and applications.</p>
          </a>

          <a href="/linear-algebra" className="course-card">
            <h3>Linear Algebra</h3>
            <p>Vectors, matrices, eigenvalues, and linear transformations.</p>
          </a>

          <a href="/multivariable" className="course-card">
            <h3>Multivariable Calculus</h3>
            <p>Partial derivatives, multiple integrals, and vector calculus.</p>
          </a>

          <a href="/discrete-math" className="course-card">
            <h3>Discrete Mathematics</h3>
            <p>Logic, sets, counting, graphs, and proof techniques.</p>
          </a>

          <a href="/analysis" className="course-card">
            <h3>Introduction to Analysis</h3>
            <p>Rigorous foundations: limits, continuity, sequences, and series.</p>
          </a>

          <a href="/abstract-algebra" className="course-card">
            <h3>Abstract Algebra</h3>
            <p>Groups, rings, fields, and isomorphisms.</p>
          </a>

          <a href="/quant-finance" className="course-card">
            <h3>Introduction to Quantitative Finance</h3>
            <p>Pricing basics, risk, and discrete-time models for finance.</p>
          </a>

          <a href="/probability-statistics" className="course-card">
            <h3>Probability and Statistics</h3>
            <p>Probability theory, distributions, estimation, and inference.</p>
          </a>

          <a href="/math-statistics" className="course-card">
            <h3>Mathematical Statistics</h3>
            <p>Probability foundations for estimation, testing, and asymptotics.</p>
          </a>

          <a href="/numerical-analysis" className="course-card">
            <h3>Numerical Analysis</h3>
            <p>Algorithms for solving mathematical problems computationally.</p>
          </a>

          <a href="/markov-chains" className="course-card">
            <h3>Markov Chains</h3>
            <p>Discrete-time chains: transition matrices, stationary distributions, hitting times, and applications.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
