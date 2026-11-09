import React from "react";

const Education = () => (
  <section
    id="education"
    style={{ maxWidth: "120rem", margin: "0 auto", padding: "5% 8%" }}
  >
    <h2
      style={{
        color: "aliceblue",
        fontSize: "3rem",
        marginBottom: "3rem",
      }}
    >
      Education
    </h2>
    <article
      style={{
        backgroundColor: "#1b263b",
        borderLeft: "0.3rem solid rgb(100, 255, 218)",
        marginBottom: "2rem",
        padding: "2rem 2.5rem",
      }}
    >
      <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "2.1rem" }}>
        MSc in Computer Science
      </h3>
      <p style={{ color: "aliceblue", fontSize: "1.7rem", marginTop: "0.5rem" }}>
        University of Bern · Joint programme with the Universities of Neuchâtel
        and Fribourg
      </p>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.5rem",
          marginTop: "0.5rem",
        }}
      >
        September 2026 – Present · Bern, Switzerland
      </p>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.6rem",
          lineHeight: "1.7",
          marginTop: "1rem",
        }}
      >
        Current coursework includes Modeling and Scaling of AI, Big Data
        Infrastructure, Fuzzy Sets, Software Product Lines, and User-Centered
        Design.
      </p>
    </article>
    <article
      style={{
        backgroundColor: "#1b263b",
        borderLeft: "0.3rem solid rgb(100, 255, 218)",
        padding: "2rem 2.5rem",
      }}
    >
      <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "2.1rem" }}>
        BE in Computer Science
      </h3>
      <p style={{ color: "aliceblue", fontSize: "1.7rem", marginTop: "0.5rem" }}>
        Visvesvaraya Technological University
      </p>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.5rem",
          marginTop: "0.5rem",
        }}
      >
        November 2020 – June 2024 · Bellary, India · CGPA 8.03/10
      </p>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.6rem",
          lineHeight: "1.7",
          marginTop: "1rem",
        }}
      >
        Completed a team capstone on a webcam-based virtual mouse using
        Python, OpenCV, MediaPipe, and PyAutoGUI. The system supported gesture
        control for cursor movement, clicks, scrolling, and volume/brightness.
      </p>
    </article>
  </section>
);

export default Education;
