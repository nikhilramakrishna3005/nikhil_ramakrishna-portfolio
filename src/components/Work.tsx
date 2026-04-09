import "./styles/Work.css";

const projects = [
  {
    number: "01",
    title: "Face Emotion Recognition using Machine Learning",
    category: "AI / ML · Computer Vision",
    description:
      "Developed a machine learning-based emotion recognition system capable of identifying human facial expressions in real time using computer vision and pattern recognition. Applied AI/ML, data science, statistics, and facial motion data analysis to classify emotions such as happiness, anger, surprise, sadness, fear, disgust, and contempt.",
    tools: [
      "Python",
      "Machine Learning",
      "AI/ML",
      "Computer Vision",
      "Pattern Recognition",
      "Data Science",
      "Statistics",
      "Facial Motion Analysis",
      "Model Evaluation",
      "Data Processing",
      "Virtual Reality",
      "LLMs",
    ],
  },
  {
    number: "02",
    title: "Zero Hunger",
    category: "Web Development · Social Impact",
    description:
      "Constructed an online platform for Vasavi Clubs International to promote the Zero Hunger Challenge and raise awareness about food security and waste reduction. Built the website using React for frontend development and Python for backend functionality.",
    tools: [
      "React",
      "Python",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "User Engagement",
      "Code Quality",
      "Food Security Awareness",
    ],
  },
  {
    number: "03",
    title: "The Breeder, Pet Selling Web Application",
    category: "Full Stack Development · Responsive Web App",
    description:
      "Built a responsive web application for showcasing pet care, sales, and delivery services. Developed the frontend using HTML, CSS, and JavaScript, and designed the backend with Java and MySQL for data storage.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "MySQL",
      "Responsive Design",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "Accessibility",
      "User Interaction",
      "Networking",
      "OOP",
    ],
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid">
          {projects.map((project) => (
            <div className="work-card" key={project.number}>
              <h3 className="work-number">{project.number}</h3>
              <h4 className="work-title">{project.title}</h4>
              <p className="work-category">{project.category}</p>
              <p className="work-description">{project.description}</p>

              <div className="work-tags">
                {project.tools.map((tool, i) => (
                  <span key={i} className="work-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;