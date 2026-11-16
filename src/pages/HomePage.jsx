import { Home, About, Experience, Skills, Projects, Contacts } from "../sections";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <>
      <PageContainer>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contacts />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.main`
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;
