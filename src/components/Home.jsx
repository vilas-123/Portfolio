import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 3rem 8rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 3rem 1.5rem;
  }
`;

const Quote = styled.blockquote`
  border-left: 0.3rem solid rgb(100, 255, 218);
  color: rgb(136, 146, 176);
  font-size: 1.7rem;
  font-style: italic;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  padding-left: 1.2rem;

  cite {
    display: block;
    font-size: 1.4rem;
    font-style: normal;
    margin-top: 0.3rem;
  }
`;

const Opening = styled.p`
  max-width: 72rem;
  color: rgb(204, 214, 246);
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
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
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  line-height: 1.3;
  margin-bottom: 1.5rem;
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
    <Eyebrow>MSc Computer Science · University of Bern</Eyebrow>
    <Name>Vilas Harapanahalli</Name>
    <Role>AI/ML Engineer building language-model systems.</Role>
    <Quote>
      “The important thing is not to stop questioning.”
      <cite>Albert Einstein</cite>
    </Quote>
    <Opening>
      I like understanding how language models work and finding ways to make
      them more useful and trustworthy.
    </Opening>
    <Summary>
      For almost three years, I built LLM-powered products and cloud backends
      at E42.ai and BeeHyv. I’m now studying Computer Science at the University
      of Bern, where I’m exploring how to make language models more efficient
      and dependable.
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
