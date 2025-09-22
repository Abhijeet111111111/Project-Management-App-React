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
        PROJECTS :[],
        tasks : []
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
           ...oldProjects,
           selectedProjectId: undefined,
           PROJECTS: [...oldProjects.PROJECTS,projectData],
       }))
    }
    function showProject (id){
        setProjects((currProjects)=>({...currProjects,selectedProjectId: id}))
    }

    function handleDelete () {
        setProjects((currProjects)=>{
            return {
                ...currProjects,
                PROJECTS: currProjects.PROJECTS.filter(e => e.pid !== currProjects.selectedProjectId),
                selectedProjectId: undefined
            }
        })
    }

    function addTask(task){
        setProjects(oldProjects =>({
            ...oldProjects,
            tasks: [...oldProjects.tasks,task]
        }))
    }
    function handleTaskDelete(id){
        setProjects(currProjects =>{
            return {
                ...currProjects,
                tasks: currProjects.tasks.filter(t => t.tId !== id)
            }
        })
    }
    function handleCancle (){
        setProjects(currProjects => ({...currProjects,selectedProjectId: undefined}))
    }

  return (
    <main className="h-screen my-8 flex gap-8">
        <SideBar PROJECTS={projects.PROJECTS} addProject={addNewProject} showProject={showProject} activeProjectId={projects.selectedProjectId}  />
        {projects.selectedProjectId === null && <AddProject onCancle={handleCancle} addNewProject={handleNewProject} />}
        {projects.selectedProjectId && <ProjectShow onTaskDelete={handleTaskDelete} allTasks={projects.tasks} onAdd={addTask}  onDelete={handleDelete} PROJECTS={projects.PROJECTS} id={projects.selectedProjectId} />}
        {projects.selectedProjectId === undefined && <NoProject addProject={addNewProject}/>}

    </main>
  );
}

export default App;
