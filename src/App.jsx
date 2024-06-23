import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer, ScrollToTop } from "./components";
import "./index.css";
import { HomePage } from "./pages";
import { motion } from "framer-motion";
import styled from "styled-components";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {showWelcome ? (
        <WelcomeContainer
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: "-110vh" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 6.3 }}
        >
          Welcome
        </WelcomeContainer>
      ) : (
        <Fragment>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;

const WelcomeContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
  background-color: black;
  color: white;
`;
