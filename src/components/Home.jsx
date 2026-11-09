import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 8rem 1.5rem;

  @media (max-width: 768px) {
    padding: 7rem 3rem 1.5rem;
  }
`;

const Eyebrow = styled.p`
  color: rgb(100, 255, 218);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Name = styled.h1`
  color: aliceblue;
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
`;

const Role = styled.h2`
  color: rgb(204, 214, 246);
  font-size: clamp(2.6rem, 5vw, 4.5rem);
  line-height: 1.2;
  margin-bottom: 2rem;
`;

const Summary = styled.p`
  max-width: 72rem;
  color: rgb(136, 146, 176);
  font-size: 1.8rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  border: 0.1rem solid rgb(100, 255, 218);
  border-radius: 0.6rem;
  color: rgb(100, 255, 218);
  font-size: 1.7rem;
  margin: 1rem 1.2rem 0 0;
  padding: 1.2rem 1.8rem;
  text-decoration: none;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Home = () => (
  <Wrapper id="top">
    <Eyebrow>AI/ML Engineer · MSc Computer Science, University of Bern</Eyebrow>
    <Name>Vilas Harapanahalli</Name>
    <Role>Building useful, efficient language-model systems.</Role>
    <Summary>
      I have nearly three years of experience building LLM-powered products and
      cloud-native backends. I am now pursuing an MSc in Computer Science in
      Switzerland, focusing on efficient and trustworthy language models,
      including fine-tuning, retrieval-augmented generation, quantization, and
      serving.
    </Summary>
    <Summary>
      Previously, I worked at E42.ai and BeeHyv Software Solutions on AI
      products, deployment platforms, industrial safety systems, and cloud
      infrastructure.
    </Summary>
    <LinkButton href="mailto:vilasharapanahalli317@gmail.com">Get in touch</LinkButton>
    <LinkButton
      href="https://www.linkedin.com/in/vilas-harapanahalli-96b231244/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </LinkButton>
  </Wrapper>
);

export default Home;
