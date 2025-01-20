import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import '../App.css';

interface ProjectListProps {
  projects: Project[];
//  onSave : (project: Project) => void;
}
function ProjectList({ projects }: ProjectListProps) {

  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  useEffect(() => {
    console.log(projects);
  })

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };
  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {/* <ProjectCard project={project} onEdit={handleEdit} /> */}

          {project === projectBeingEdited ? ( 
            <ProjectForm onCancel={cancelEditing}  project = {project}/>
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
}
export default ProjectList;
