import React from "react";

const App = () => {
  const portfolioData = {
    name: "Meghana Kambhampati",
    reg:"21BLC1390",
    place: "Hyderabad, India",
    skills: ["Machine learning", "Web Development","Event Management","Social Work","Dancing"],
    projects: [
      {
        title: "New Home Construction Image Classification.",
        description: "Developed an AI/ML system to automatically classify images into three categories: Floor Plan, Elevation, and InteriorImages. Achieved high accuracy using deep learning, data augmentation, and model deployment, demonstrating strong computer vision and problem-solving skills.",
      },
      {
        title: "Smart Home Automation System",
        description: "To develop a voice-controlled home automation system that enables users to control the lights, fan speed based on temperature and infrared sensor based wireless remote-controlled technique using an ESP32 micro controller, Arduino IDE, a temperature sensor, infrared sensor and integration with Alexa and Google Assistant voice control. The system should provide a convenient and hands-free solution for managing home appliances, promoting energy efficiency, and enhancing the overall user experience.",
      },
      
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>REGISTRATION NUMBER:</u> {portfolioData.reg}</h2>
          <h2><u>PLACE:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>ABOUT ME</u></h3>
            <p>I am a third-year computer science student at Vellore Institute of Technology, with a passion for AI, ML, and web development. Proven coding skills as well as excellent communication and teamwork skills. 
              Seeking opportunities to apply my knowledge and skills to solve real-world problems and make a positive impact.
              </p>
          </div>
          <div className="skills">
            <h3><u>SKILLS</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>PROJECTS</u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;