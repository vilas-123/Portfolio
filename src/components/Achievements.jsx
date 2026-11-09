import React from "react";

const Achievements = () => (
  <section
    id="achievements"
    style={{ maxWidth: "120rem", margin: "0 auto", padding: "5% 8%" }}
  >
    <h2
      style={{
        color: "aliceblue",
        fontSize: "3rem",
        marginBottom: "2rem",
      }}
    >
      Awards
    </h2>
    <article
      style={{
        backgroundColor: "#1b263b",
        borderLeft: "0.3rem solid rgb(100, 255, 218)",
        padding: "2rem 2.5rem",
      }}
    >
      <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "2.1rem" }}>
        3rd place — HackAppertus 2026
      </h3>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.7rem",
          lineHeight: "1.7",
          marginTop: "1rem",
        }}
      >
        Team award for Apertus-ParlTopics-8B, a LoRA-fine-tuned language model
        for classifying Swiss parliamentary affairs by topic.
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
        Hackathon announcement
      </a>
    </article>
  </section>
);

export default Achievements;
