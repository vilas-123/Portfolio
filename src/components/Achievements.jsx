import React from "react";

const Achievements = () => (
  <section
    id="achievements"
    style={{ maxWidth: "120rem", margin: "0 auto", padding: "1.5rem 8%" }}
  >
    <h2
      style={{
        color: "aliceblue",
        fontSize: "3rem",
        marginBottom: "1.5rem",
      }}
    >
      Recognition
    </h2>
    <article
      style={{
        backgroundColor: "#1b263b",
        borderLeft: "0.3rem solid rgb(100, 255, 218)",
        padding: "2rem 2.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: "rgb(136, 146, 176)", fontSize: "1.7rem", lineHeight: "1.7" }}>
        Google Gold badge for work in natural language processing and large
        language models.
      </p>
    </article>
    <article
      style={{
        backgroundColor: "#1b263b",
        borderLeft: "0.3rem solid rgb(100, 255, 218)",
        padding: "2rem 2.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: "rgb(136, 146, 176)", fontSize: "1.7rem", lineHeight: "1.7" }}>
        Cisco CCNA Security certification, 2023.
      </p>
    </article>
    <article
      style={{
        backgroundColor: "#1b263b",
        borderLeft: "0.3rem solid rgb(100, 255, 218)",
        padding: "2rem 2.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: "rgb(136, 146, 176)", fontSize: "1.7rem", lineHeight: "1.7" }}>
        Excellence Certificate at the Cognitive Applications (ML) Workshop,
        attended by more than 500 participants.
      </p>
    </article>
    <article
      style={{
        backgroundColor: "#1b263b",
        borderLeft: "0.3rem solid rgb(100, 255, 218)",
        padding: "2rem 2.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: "rgb(136, 146, 176)", fontSize: "1.7rem", lineHeight: "1.7" }}>
        First place at the IEEE Project Symposium Prakalp, 2024
        (credential STB99412).
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
        Third place at HackAppertus, 2026
      </h3>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.7rem",
          lineHeight: "1.7",
          marginTop: "1rem",
        }}
      >
        My team built Apertus-ParlTopics-8B, a LoRA-fine-tuned model that
        classifies Swiss parliamentary affairs by topic.
      </p>
      <a
        href="https://lnkd.in/p/eDzvYBEk"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "rgb(100, 255, 218)",
          display: "inline-block",
          fontSize: "1.6rem",
          marginTop: "1rem",
        }}
      >
        Read the announcement
      </a>
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
        gap: "1.5rem",
        marginTop: "2rem",
      }}
      >
      <img
        src={require("../images/HackAppertus-Presentation.png")}
        alt="Presenting our project with a teammate at HackAppertus"
        loading="lazy"
        style={{
          width: "100%",
          height: "28rem",
          objectFit: "cover",
          objectPosition: "center 55%",
          borderRadius: "0.8rem",
        }}
      />
      <img
        src={require("../images/HackAppertus-Team.png")}
        alt="Our team at HackAppertus"
        loading="lazy"
        style={{
          width: "100%",
          height: "28rem",
          objectFit: "cover",
          objectPosition: "center 45%",
          borderRadius: "0.8rem",
        }}
      />
      </div>
    </article>
  </section>
);

export default Achievements;
