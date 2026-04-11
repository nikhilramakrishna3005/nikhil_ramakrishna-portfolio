import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          <div className="what-content what-content-active">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3 className="one-line-title">SOFTWARE ENGINEER</h3>
              <h4>Backend and Frontend</h4>
              <p>
                I build end-to-end applications with strong backend focus —
                designing REST APIs, implementing business logic, integrating
                databases, and connecting scalable systems with clean frontend
                interfaces.
              </p>
            </div>
          </div>

          <div className="what-content what-content-active">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3 className="one-line-title">AI ENGINEER</h3>
              <h4>Cloud, Data and Backend Integration</h4>
              <p>
                I build AI systems by combining machine learning, data
                pipelines, cloud deployment, and backend integration — turning
                models into scalable, production-ready applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;