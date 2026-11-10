import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.5rem 8%;
`;

const Card = styled.article`
  background: #1b263b;
  border-left: 0.3rem solid rgb(100, 255, 218);
  margin-bottom: 1.25rem;
  padding: 2.5rem;
`;

const Title = styled.h3`
  color: rgb(100, 255, 218);
  font-size: 2.1rem;
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  color: rgb(136, 146, 176);
  font-size: 1.7rem;
  line-height: 1.7;
`;

const Tags = styled.p`
  color: rgb(204, 214, 246);
  font-size: 1.5rem;
  line-height: 1.7;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: rgb(100, 255, 218);
  font-size: 1.6rem;
  margin: 1rem 1.5rem 0 0;
  display: inline-block;
`;

const DocumentLink = styled.a`
  display: inline-block;
  margin: 1.2rem 1rem 0 0;
  padding: 0.9rem 1.3rem;
  border: 0.1rem solid rgba(100, 255, 218, 0.55);
  border-radius: 0.6rem;
  color: rgb(100, 255, 218);
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Projects = () => (
  <Section id="recent-projects">
    <h2
      style={{
        color: "aliceblue",
        fontSize: "3rem",
        marginBottom: "1.5rem",
      }}
    >
      Projects from My Studies
    </h2>
    <div style={{ margin: "1.5rem 0 1rem" }}>
      <h3 style={{ color: "aliceblue", fontSize: "2.3rem" }}>
        Master&apos;s Projects
      </h3>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.6rem",
          marginTop: "0.4rem",
        }}
      >
        University of Bern · Joint MSc programme with the Universities of
        Neuchâtel and Fribourg
      </p>
    </div>
    <Card>
      <Title>CiteRight: Language models that cite their sources</Title>
      <Description>
        My team is teaching smaller open language models to cite their sources
        and say when they don’t know. I’m working on 4-bit quantization, vLLM
        serving, and measuring latency and memory. The project combines LoRA
        fine-tuning, DPO, and verifier-guided decoding.
      </Description>
      <Tags>LoRA · DPO · Quantization · vLLM · Model evaluation</Tags>
    </Card>
    <Card>
      <Title>Famigo: A family task-and-reward app</Title>
      <Description>
        For a user-centered design project, my team is creating an app where
        families can share tasks and rewards to help children build confidence
        and responsibility.
      </Description>
      <Tags>User-centered design · Product design</Tags>
    </Card>
    <Card>
      <Title>A robot that can handle delicate objects</Title>
      <Description>
        In our Fuzzy Sets project, we’re exploring how a robot could safely
        pick up objects that are slippery or fragile.
      </Description>
      <Tags>Fuzzy logic · Robotics</Tags>
    </Card>
    <div style={{ margin: "2rem 0 1rem" }}>
      <h3 style={{ color: "aliceblue", fontSize: "2.3rem" }}>
        Bachelor&apos;s Thesis
      </h3>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.6rem",
          marginTop: "0.4rem",
        }}
      >
        Visvesvaraya Technological University (VTU)
      </p>
    </div>
    <Card>
      <Title>Virtual mouse controlled by hand gestures</Title>
      <Description>
        For my bachelor’s thesis, my team built a virtual mouse that tracks
        hand gestures through a webcam. It can move the cursor, click, scroll,
        and adjust volume and brightness without any extra hardware. Our paper
        was published in IJARCCE, Volume 13, Issue 4, in April 2024.
      </Description>
      <Tags>Python · OpenCV · MediaPipe · PyAutoGUI</Tags>
      <div>
        <h4
          style={{
            color: "aliceblue",
            fontSize: "1.7rem",
            marginTop: "1.8rem",
          }}
        >
          Thesis and degree documents
        </h4>
        <DocumentLink
          href="/documents/virtual-mouse-publication-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open publication certificate
        </DocumentLink>
        <DocumentLink
          href="/documents/btech-transcript.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open VTU transcript
        </DocumentLink>
        <DocumentLink
          href="/documents/degree-completion-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open degree completion certificate
        </DocumentLink>
        <h4
          style={{
            color: "aliceblue",
            fontSize: "1.7rem",
            marginTop: "1.8rem",
          }}
        >
          Letters of recommendation
        </h4>
        <DocumentLink
          href="/documents/professional-recommendation-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open recommendation letter 1
        </DocumentLink>
        <DocumentLink
          href="/documents/professional-recommendation-2.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open recommendation letter 2
        </DocumentLink>
      </div>
    </Card>
    <div style={{ margin: "2rem 0 1rem" }}>
      <h3 style={{ color: "aliceblue", fontSize: "2.3rem" }}>
        Hackathon Project
      </h3>
      <p
        style={{
          color: "rgb(136, 146, 176)",
          fontSize: "1.6rem",
          marginTop: "0.4rem",
        }}
      >
        HackAppertus 2026 · Third place
      </p>
    </div>
    <Card>
      <Title>Apertus-ParlTopics-8B: Swiss parliamentary topics</Title>
      <Description>
        At HackAppertus in October 2026, my team took third place with this
        project. We fine-tuned Apertus 8B with LoRA to label Swiss parliamentary
        affairs by topic in a single pass. It matched a closed frontier model
        across three labelling schemes and was used to label 318,801 affairs in
        OpenParlData.
      </Description>
      <Tags>Apertus · LoRA · Swiss Parliament · OpenParlData</Tags>
      <ProjectLink
        href="https://github.com/prakash-aryan/parlamentsthemen"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore the code
      </ProjectLink>
      <ProjectLink
        href="https://huggingface.co/merabro/Apertus-ParlTopics-8B"
        target="_blank"
        rel="noopener noreferrer"
      >
        Model
      </ProjectLink>
      <ProjectLink
        href="https://prakash-aryan.github.io/parlamentsthemen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        See the slides
      </ProjectLink>
    </Card>
  </Section>
);

export default Projects;
