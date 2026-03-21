import { Home, About, Experience, Skills, Projects, Contacts } from "../sections";
import { SpaceBackground } from "../components/SpaceBackground";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <>
      <SpaceBackground />
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
