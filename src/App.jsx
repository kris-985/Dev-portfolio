import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components";
import "./index.css";
import { HomePage } from "./pages";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
