import React, { SyntheticEvent, useState } from "react";
import { Project } from "./Project";
interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}
function ProjectForm({
  onCancel,
  onSave,
  project: initialProject,
}: ProjectFormProps) {
  // ngày mai hỏi a lùn
  const [project, setProject] = useState(initialProject);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(new Project({ name: "Updated Project" }));
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;

    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
  };
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={project.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="Enter Description"
        value={project.budget}
        onChange={handleChange}
      />
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="Enter Budget" />
      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={project.isActive}
        onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
export default ProjectForm;
