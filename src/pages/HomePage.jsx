import { Fragment } from "react";
import { Home, About, Skills, Projects, Contacts } from "../sections";

export const HomePage = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </Fragment>
  );
};
