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

  @media (min-width: 1200px) {
    padding: 20px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 10px;
  }

  @media (max-width: 767px) {
    padding: 5px;
  }

  @media (max-width: 480px) {
    padding: 2px;
  }
`;