import React from "react";

const jobs = [
  {
    company: "E42.ai — Light Information Systems",
    title: "Software Developer / Full Stack — AI Engineer",
    dates: "January 2025 – October 2026",
    location: "Pune, India",
    highlights: [
      "Built an LLM-powered marketing chatbot and insights platform with LangChain and LangGraph agents, combining live news and campaign data from MongoDB.",
      "Added RAG-based similarity search to match news and campaign signals with relevant products, reducing manual reporting effort by about 30%.",
      "Designed a zero-touch delivery pipeline with Jenkins, SonarQube, Docker Hub, Argo CD, and Kubernetes, eliminating manual release steps.",
    ],
  },
  {
    company: "BeeHyv Software Solutions",
    title: "Software Engineer (Intern → Full-time)",
    dates: "January 2024 – January 2025",
    location: "Hyderabad, India",
    highlights: [
      "Implemented WebSocket connections to stream live chip status to the TensorXLabs client dashboard.",
      "Developed an AI accident-prediction system using LoRA/QLoRA and RAG, with real-time alerts for industrial safety.",
      "Provisioned and managed AWS infrastructure across EC2, EKS, and S3 using Terraform.",
    ],
  },
];

const Experience = () => (
  <section
    id="experience"
    style={{ maxWidth: "120rem", margin: "0 auto", padding: "5% 8%" }}
  >
    <h2
      style={{
        color: "aliceblue",
        fontSize: "3rem",
        marginBottom: "3rem",
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
          marginBottom: "2rem",
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
