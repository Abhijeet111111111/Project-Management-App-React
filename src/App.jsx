import SideBar from "./Components/SideBar.jsx";
import ProjectShow from "./Components/ProjectShow.jsx";
import {useState} from "react";
import AddProject from "./Components/AddProject.jsx";
import NoProject from "./Components/NoProject.jsx";
import Modal from "./Components/Modal.jsx";
let showAddProject = false;
let noProjectActive = true;
function App() {


    const [projects,setProjects] = useState
    ({
        selectedProjectId : undefined, // ud -> noProject , null->AddProject ,id->activeProject
        PROJECTS :[]
    })
    function addNewProject (){
        setProjects(oldProjects =>({
            ...oldProjects,
            selectedProjectId: null
        }))
    }
    function handleNewProject (projectData){
        const id = Math.random();
        projectData.pid = id;
       setProjects(oldProjects =>({
           selectedProjectId: undefined,
           PROJECTS: [...oldProjects.PROJECTS,projectData]
       }))
    }
    function showProject (id){
        setProjects((currProjects)=>({...currProjects,selectedProjectId: id}))
    }

  return (
    <main className="h-screen my-8 flex gap-8">
        <SideBar PROJECTS={projects.PROJECTS} addProject={addNewProject} showProject={showProject} activeProjectId={projects.selectedProjectId}  />
        {projects.selectedProjectId === null && <AddProject addNewProject={handleNewProject} />}
        {projects.selectedProjectId && <ProjectShow PROJECTS={projects.PROJECTS} id={projects.selectedProjectId} />}
        {projects.selectedProjectId === undefined && <NoProject addProject={addNewProject}/>}

    </main>
  );
}

export default App;
