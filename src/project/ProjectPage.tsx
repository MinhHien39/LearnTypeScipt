import React, { useState } from "react";

import { MockProject } from "./MockProject";
import ProjectList from "./ProjectList";
import { Project } from "./Project";
function ProjectPage() {
    // mai hỏi anh lùn
  const [projects , setProjects] = useState<Project[]>(MockProject);
  const saveProject = (project: Project) => {
    console.log("Saving project : ", project);
    let updatedProjects = projects.map((p : Project) => {
        return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };
  return (
    <div className="headerMockProject">
      {/* <pre>{JSON.stringify(MOCK_PROJECT , null , '' )}</pre> */}
      {/* <ProjectList projects={MockProject} onSave={saveProject} /> */}
      <ProjectList onSave={saveProject} projects={MockProject} />
     </div>
  );
}

export default ProjectPage;
