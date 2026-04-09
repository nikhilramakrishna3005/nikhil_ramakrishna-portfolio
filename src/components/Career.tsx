import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master’s Student in Computer Science</h4>
                <h5>The George Washington University · Washington, DC</h5>
              </div>
              <h3>2025–Now</h3>
            </div>
            <p>
              Pursuing an M.S. in Computer Science with coursework in software
              architecture, design and analysis of algorithms, AI, big data, and
              database management while building projects focused on backend
              systems, scalable applications, and real-world problem solving.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Mercedes-Benz Research & Development · Bengaluru, India</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Built and optimized backend services using Java, Spring Boot,
              Hibernate, and Oracle Database. Developed 30+ REST APIs, improved
              SQL query performance, contributed to CI/CD workflows, maintained
              95%+ JUnit coverage, and supported the evolution of enterprise
              applications through debugging, code reviews, performance tuning,
              and sprint collaboration.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern, Backend</h4>
                <h5>Mercedes-Benz Research & Development · Bengaluru, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Designed and implemented 15+ REST APIs, supported backend
              integration, improved worker screen functionality, contributed to
              database design, and helped maintain strong code quality through
              unit testing, debugging, and SonarQube compliance.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>GOGAME · Bengaluru, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Contributed to application development across UI and backend
              workflows using C/C++,Python, Flask, React, and Node.js. Helped design
              user-facing features, worked on prototyping and feedback-driven
              improvements, and collaborated in an agile development environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;