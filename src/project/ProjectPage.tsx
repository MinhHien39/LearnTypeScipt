import React, { useState, useEffect, Fragment } from "react";

import ProjectList from "./ProjectList";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";
import { useSelector, useDispatch } from "react-redux";
import { AppState, initialAppState } from "../state";
import { ThunkDispatch } from "redux-thunk";
import { ProjectState } from "./state/projectTypes";
import { AnyAction } from "redux";
import { loadProjects} from './state/projectActions';

function ProjectPage() {
  // -----------------------React Redux State --------------------
  const loading = useSelector(
    (appState: AppState) => appState.projectState.loading
  );
  const projects = useSelector(
    (appState: AppState) => appState.projectState.projects
  );
  const error = useSelector(
    (appState: AppState) => appState.projectState.error
  );
  const currentPage = useSelector(
    (appState: AppState) => appState.projectState.page
  );
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();
  
  useEffect(() => {
    dispatch(loadProjects(1));
  }, [dispatch]);

  const handleMoreClick =  () => {
    dispatch(loadProjects(currentPage + 1));
  }



  //-----------------------------React----------------------------------------------------
  // mai hỏi anh lùn
  //const [projects, setProjects] = useState<Project[]>(MockProject);
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | undefined>(undefined);
  // const [currentPage, setCurrentPage] = useState(1);
  // const saveProject = (project: Project) => {
  //   projectAPI
  //     .put(project)
  //     .then((updatedProject) => {
  //       let updatedProjects = projects.map((p: Project) => {
  //         return p.id === project.id ? new Project(updatedProject) : p;
  //       });
  //       setProjects(updatedProjects);
  //     })
  //     .catch((e) => {
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       }
  //     });
  // };
  // Approach 1 : using promise then
  // useEffect(() => {
  //   setLoading(true);
  //   projectAPI
  //   .get(1)
  //   .then((data) => {
  //     setError(null);
  //     setLoading(false);
  //     setProjects(data);
  //   })
  //   .catch((e) => {
  //     setLoading(false);
  //     setError(e.message);
  //     if(e instanceof Error) {
  //       setError(e.message);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   async function loadProjects() {
  //     setLoading(true);
  //     try {
  //       const data: Project[] = await projectAPI.get(currentPage);
  //       // const data: Project[] = await projectAPI.get(1);
  //       setError("");
  //       // setProjects(data);
  //       if (currentPage === 1) {
  //         setProjects(data);
  //       } else {
  //         setProjects((projects) => [...projects, ...data]);
  //       }
  //     } catch (e) {
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadProjects();
  //   // }, []);
  // }, [currentPage]);

  // const handleMoreClick = () => {
  //   setCurrentPage((currentPage) => currentPage + 1);
  // };

  return (
    <Fragment>
      <h1>Projects</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse"></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      {/* <pre>{JSON.stringify(MOCK_PROJECT , null , '' )}</pre> */}
      {/* <ProjectList projects={MockProject} onSave={saveProject} /> */}
      {/* <ProjectList onSave={saveProject} projects={projects} /> */}
      <ProjectList projects={projects} />
      
      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading......</p>
        </div>
      )}
    </Fragment>
  );
}

export default ProjectPage;
