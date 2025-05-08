import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      style={{
        padding: "5% 10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ maxWidth: "120rem", margin: "0 auto", padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ maxWidth: "100%" }}>
            <div
              style={{
                fontSize: "3rem",
                color: "aliceblue",
                fontWeight: "bold",
                paddingBottom: "4rem",
              }}
              id="about"
            >
              About Me
            </div>
            
            <div
  style={{
    maxWidth: "35%",
    // Add margin auto to center the container itself
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    transition: "all 0.5s ease",
    opacity: 0.9,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#e9f5f5";
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.opacity = "1";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.opacity = "0.9";
  }}
>
  <div style={{ 
    display: 'flex',
    justifyContent: 'center', // Add this to center the image horizontally
    alignItems: 'center'      // Add this to center the image vertically
  }}>
    <img
      src={require("../images/Profile2.jpeg")}
      alt="Profile"
      style={{
        maxWidth: "100%",
        borderRadius: "1rem",
        border: ".1rem solid #6c63ff"
        // Remove margin: "0 auto" since we're using flex centering
      }}
    />
  </div>
</div>
            <div
              style={{
                lineHeight: "1.6",
                fontSize: "1.8rem",
                color: "rgb(136, 146, 176)",
                marginBottom: "2rem",
              }}
            >
              Hello! My journey began as a high school student with a keen
              interest in Mathematics. I was introduced to programming during
              my freshman year at the
              <Link
                to="https://vtu.ac.in/en/"
                style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}
                target="_blank"
              >
                Visvesvaraya Technological University
              </Link>
              . My passion for coding ignited in 2020, during my first year of
              B.Tech. Since then, I have immersed myself in learning various
              programming languages and honing my skills in solving complex
              problems using data structures and algorithms. Above all, I pride
              myself on being a dedicated Problem Solver.
            </div>

            <div
              style={{
                lineHeight: "1.6",
                fontSize: "1.8rem",
                color: "rgb(136, 146, 176)",
                marginBottom: "2rem",
              }}
            >
              I've pursued my Bachelors in Computer Science Engineering
              (2020-2024) with&nbsp;
              <a
                href="https://drive.google.com/file/d/1m_2LDyGIBJ2V2pKCp-2aouZfhrphxexZ/view?usp=sharing"
                style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                8.30 CGPA aggregate
              </a>
              .
            </div>

            <div
              style={{
                lineHeight: "1.6",
                fontSize: "1.8rem",
                color: "rgb(136, 146, 176)",
                marginBottom: "2rem",
              }}
            >
              Also, I have knowledge of Machine Learning, including Llama, RAG,
              and Neural Networks, as well as Web Development. I've created
              several projects using HTML, CSS, JavaScript, React.js, and other
              cool libraries and frameworks. Additionally, I am proficient in
              REST Framework, Django, and PineconeDB.
            </div>

            <div
              style={{
                lineHeight: "1.6",
                fontSize: "1.8rem",
                color: "rgb(136, 146, 176)",
                marginBottom: "2rem",
              }}
              id="skills"
            >
              Here is a list of the technologies that I've worked with.
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                listStyleType: "none",
                padding: 0,
              }}
            >
              {[
                "Python",
                "SQL",
                "JavaScript",
                "ReactJS || Typescript",
                "Deeplearning",
                "Bootstrap",
                "Material UI",
                "Natural Language Processing(NLP)",
                "Data Structures",
                "Git || Github",
                "AWS",
                "Jenkins",
                "DBMS",
                "Apache Kafka",
                "ML Libraries",
                "Numpy || Pandas || Matplotlib",
                "Docker",
              ].map((tech, index) => (
                <div
                  key={index}
                  style={{
                    marginRight: "1.5rem",
                    marginBottom: "1rem",
                    fontSize: "1.5rem",
                    color: "rgb(100, 255, 218)",
                    backgroundColor: "#1b263b",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
