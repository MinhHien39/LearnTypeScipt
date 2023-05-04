import React from "react";
import "./App.css";
import ProjectPage from "./project/ProjectPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./page/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./state";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <header className="sticky">
          <span className="logo">
            <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
          </span>
          <NavLink to="/" className="button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>
          <NavLink to="/projects" className="button rounded">
            Projects
          </NavLink>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            {/* <Route path="/projects/:id" element={<ProjectPage />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
