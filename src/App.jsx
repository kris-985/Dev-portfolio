import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer, ScrollToTop } from "./components";
import "./index.css";
import { HomePage } from "./pages";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeContainer
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeLogo
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              KB
            </WelcomeLogo>
            <LoadingBar>
              <LoadingProgress
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </LoadingBar>
          </WelcomeContainer>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default App;

const WelcomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0a0f14;
  gap: 2rem;
`;

const WelcomeLogo = styled(motion.div)`
  font-size: 4rem;
  font-weight: 700;
  color: #14b8a6;
  letter-spacing: -0.02em;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 2px;
  background: #1e293b;
  border-radius: 2px;
  overflow: hidden;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: #14b8a6;
  border-radius: 2px;
`;
