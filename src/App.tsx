import React from "react";

import "./App.css";
import ProjectPage from "./project/ProjectPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectPage />
      </header>
      <blockquote cite="Benjamin Franklin">
        Tell me and I forget, teach me and I may remember, involve me and I
        learn.
      </blockquote>
    </div>
  );
}

export default App;
