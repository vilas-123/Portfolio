import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 3.5rem 8%;
`;

const Card = styled.article`
  background: #1b263b;
  border-left: 0.3rem solid rgb(100, 255, 218);
  margin-bottom: 2rem;
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

const Projects = () => (
  <Section id="recent-projects">
    <h2
      style={{
        color: "aliceblue",
        fontSize: "3rem",
        marginBottom: "2rem",
      }}
    >
      Recent Academic & Research Projects
    </h2>
    <Card>
      <Title>CiteRight — Efficient, grounded language models</Title>
      <Description>
        University team project training small open language models to cite
        sources and abstain when uncertain. I worked on 4-bit quantization,
        vLLM serving, and latency and memory benchmarking. The approach
        combines LoRA supervised fine-tuning, DPO, and verifier-guided decoding.
      </Description>
      <Tags>LoRA · DPO · Quantization · vLLM · Model evaluation</Tags>
    </Card>
    <Card>
      <Title>Apertus-ParlTopics-8B — HackAppertus 2026</Title>
      <Description>
        Team project that earned 3rd place at the October 2026 HackAppertus.
        We LoRA fine-tuned Apertus 8B to assign Swiss parliamentary affairs to
        topics in one forward pass, matching a closed frontier model across
        three labelling schemes. The model was used to label 318,801 affairs
        in OpenParlData.
      </Description>
      <Tags>Apertus · LoRA · Swiss Parliament · OpenParlData</Tags>
      <ProjectLink
        href="https://github.com/prakash-aryan/parlamentsthemen"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source code
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
        Project slides
      </ProjectLink>
    </Card>
    <Card>
      <Title>Famigo — Family task-and-reward app</Title>
      <Description>
        User-centered design team project for a family app that helps children
        build confidence and responsibility through shared tasks and rewards.
      </Description>
      <Tags>User-centered design · Product design</Tags>
    </Card>
    <Card>
      <Title>Fuzzy-logic robot for delicate objects</Title>
      <Description>
        Fuzzy Sets team project exploring a robot that can handle slippery and
        fragile objects.
      </Description>
      <Tags>Fuzzy logic · Robotics</Tags>
    </Card>
    <Card>
      <Title>Virtual Mouse using Hand Gestures</Title>
      <Description>
        Bachelor&apos;s capstone: a real-time webcam hand-tracking system for
        controlling the cursor, clicking, scrolling, and adjusting volume and
        brightness without additional hardware.
      </Description>
      <Tags>Python · OpenCV · MediaPipe · PyAutoGUI</Tags>
    </Card>
  </Section>
);

export default Projects;
