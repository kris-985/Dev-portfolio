import { Fragment } from "react";
import { Home, About, Skills, Projects, Contacts } from "../sections";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <PageContainer>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;
