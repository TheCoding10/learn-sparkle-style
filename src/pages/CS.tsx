import "./CS.css";

export default function CS() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>
          Master <span className="highlight">Computer Science</span>
        </h1>
        <p>
          Build your foundation in computer science with core courses designed 
          to develop problem-solving, logical thinking, and programming skills.
        </p>
      </div>

      {/* Courses Section */}
      <div className="courses-section">
        <div className="section-header">
          <h2 className="section-title">Computer Science Courses</h2>
          <p className="section-subtitle">
            Start your CS journey with these essential topics
          </p>
        </div>

        <div className="course-grid">
          <a href="/intro-programming" className="course-card">
            <h3>Introduction to Programming</h3>
            <p>Learn Python/Java, functions, loops, and problem solving.</p>
          </a>

          <a href="/discrete-math" className="course-card">
            <h3>Discrete Mathematics</h3>
            <p>Logic, sets, proofs, recursion, and graphs.</p>
          </a>

          <a href="/data-structures-algorithms1" className="course-card">
            <h3>Data Structures & Algorithms I</h3>
            <p>Arrays, stacks, queues, recursion, and Big-O.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
