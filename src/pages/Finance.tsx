import "./Finance.css";

export default function Finance() {
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
          Master <span className="highlight">Finance & Investing</span>
        </h1>
        <p>
          Understand money, markets, and smart financial decisions through
          courses that build your financial literacy and investment skills.
        </p>
      </div>

      {/* Courses Section */}
      <div className="courses-section">
        <div className="section-header">
          <h2 className="section-title">Finance & Investing Courses</h2>
          <p className="section-subtitle">
            Start your journey into money, markets, and investments
          </p>
        </div>

        <div className="course-grid">
          <a href="/personal-finance" className="course-card">
            <h3>Personal Finance Basics</h3>
            <p>Budgeting, saving, debt, and financial planning foundations.</p>
          </a>

          <a href="/financial-literacy" className="course-card">
            <h3>Financial Literacy</h3>
            <p>Compound interest, inflation, net worth, and time value of money.</p>
          </a>

          <a href="/intro-investing" className="course-card">
            <h3>Introduction to Investing</h3>
            <p>Stocks, bonds, ETFs, mutual funds, and risk management.</p>
          </a>

          <a href="/banking-institutions" className="course-card">
            <h3>Banking & Financial Institutions</h3>
            <p>Interest, loans, credit, and how banks operate.</p>
          </a>

          <a href="/stock-market" className="course-card">
            <h3>Stock Market Fundamentals</h3>
            <p>Exchanges, tickers, dividends, and order types.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
