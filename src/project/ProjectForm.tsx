import React from "react";
function ProjectForm () {
  return (
    <form className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="Enter Name" />
      <label htmlFor="description">Project Description</label>
      <textarea name = "description" placeholder ="Enter Description"/>
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder ="Enter Budget" />
      <label htmlFor="isActive" >Active?</label>
      <input type="checkbox" name="isActive" />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium">cancel</button>
      </div>
    </form>
  )

}
export default ProjectForm;