import React from 'react'
import { MockProject } from './MockProject';
import ProjectList from './ProjectList';
function ProjectPage() {
    return (
        <div className='headerMockProject'>  
        {/* <pre>{JSON.stringify(MOCK_PROJECT , null , '' )}</pre> */}
        <ProjectList projects = {MockProject} />        
        </div>
    )
}

export default ProjectPage;