import React from "react";
import { Project } from "./Project";
import { Link } from "react-router-dom";
import "./MockProject";

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}
interface ProjectCardProps {
  // chiều hỏi a lùn
  project: Project;
  onEdit: (project: Project) => void;
}
function ProjectCard(props: ProjectCardProps) {
  // chiều hỏi a lùn
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdit: Project) => {
    onEdit(projectBeingEdit);
  };
  return (
    <div>
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <Link to={"/projects/" + project.id}>
          <h5>{project.name}</h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <button
          className="bordered"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit">Edit</span>
        </button>
      </section>
    </div>
  );
}
export default ProjectCard;
