import React from "react";

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "FastAPI",
  "React",
  "Angular",
  "PyTorch",
  "TensorFlow",
  "TensorRT",
  "ONNX Runtime",
  "LangChain",
  "LangGraph",
  "RAG",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Jenkins",
];

const About = () => (
  <section
    id="about"
    style={{
      maxWidth: "120rem",
      margin: "0 auto",
      padding: "5% 8%",
    }}
  >
    <h2
      style={{
        fontSize: "3rem",
        color: "aliceblue",
        paddingBottom: "2rem",
      }}
    >
      About Me
    </h2>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
        flexWrap: "wrap",
        marginBottom: "2rem",
      }}
    >
      <img
        src={require("../images/Profile.png")}
        alt="Vilas Harapanahalli"
        style={{
          width: "min(22rem, 100%)",
          borderRadius: "1rem",
          border: ".1rem solid #6c63ff",
        }}
      />
      <p
        style={{
          flex: "1 1 36rem",
          lineHeight: "1.7",
          fontSize: "1.8rem",
          color: "rgb(136, 146, 176)",
        }}
      >
        I am an AI/ML engineer with almost three years of experience delivering
        language-model applications and production backends. I earned my
        bachelor&apos;s degree in Computer Science from Visvesvaraya
        Technological University (CGPA 8.03/10) and am pursuing a master&apos;s
        degree at the University of Bern. My current interests are efficient
        and trustworthy language models, from fine-tuning and retrieval to
        quantization and deployment.
      </p>
    </div>
    <div
      id="skills"
      style={{
        lineHeight: "1.6",
        fontSize: "1.8rem",
        color: "rgb(136, 146, 176)",
        marginBottom: "1.5rem",
      }}
    >
      <h3 style={{ color: "aliceblue", fontSize: "2.2rem", marginBottom: "1rem" }}>
        Technical Skills
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              margin: "0 1rem 1rem 0",
              fontSize: "1.5rem",
              color: "rgb(100, 255, 218)",
              backgroundColor: "#1b263b",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default About;
