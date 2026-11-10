import React from "react";

const jobs = [
  {
    company: "E42.ai (Light Information Systems)",
    title: "Software Developer / Full Stack AI Engineer",
    dates: "January 2025 – October 2026",
    location: "Pune, India",
    highlights: [
      "I built a marketing chatbot and insights platform with LangChain and LangGraph. It brings together live news and campaign data stored in MongoDB.",
      "I added a RAG search that connects news and campaign signals with relevant products. It cut the time spent on manual reporting by about 30%.",
      "I also built an automated release pipeline with Jenkins, SonarQube, Docker Hub, Argo CD, and Kubernetes, so releases no longer needed manual steps.",
    ],
  },
  {
    company: "BeeHyv Software Solutions",
    title: "Software Engineer (Intern → Full-time)",
    dates: "January 2024 – January 2025",
    location: "Hyderabad, India",
    highlights: [
      "I added WebSocket connections that stream live chip status to TensorXLabs’ dashboard.",
      "I worked on an AI accident-prediction system using LoRA/QLoRA and RAG, with real-time alerts for industrial safety.",
      "I set up and managed AWS infrastructure on EC2, EKS, and S3 with Terraform.",
    ],
  },
];

const Experience = () => (
  <section
    id="experience"
    style={{ maxWidth: "120rem", margin: "0 auto", padding: "1.5rem 8%" }}
  >
    <h2
      style={{
        color: "aliceblue",
        fontSize: "3rem",
        marginBottom: "1.5rem",
      }}
    >
      Experience
    </h2>
    {jobs.map((job) => (
      <article
        key={job.company}
        style={{
          backgroundColor: "#1b263b",
          borderLeft: "0.3rem solid rgb(100, 255, 218)",
          marginBottom: "1.25rem",
          padding: "2rem 2.5rem",
        }}
      >
        <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "2.1rem" }}>
          {job.company}
        </h3>
        <p
          style={{
            color: "aliceblue",
            fontSize: "1.7rem",
            marginTop: "0.5rem",
          }}
        >
          {job.title} · {job.location}
        </p>
        <p
          style={{
            color: "rgb(136, 146, 176)",
            fontSize: "1.5rem",
            margin: "0.5rem 0 1rem",
          }}
        >
          {job.dates}
        </p>
        <ul
          style={{
            color: "rgb(136, 146, 176)",
            fontSize: "1.6rem",
            lineHeight: "1.7",
            paddingLeft: "2rem",
          }}
        >
          {job.highlights.map((highlight) => (
            <li key={highlight} style={{ marginBottom: "0.7rem" }}>
              {highlight}
            </li>
          ))}
        </ul>
      </article>
    ))}
  </section>
);

export default Experience;
