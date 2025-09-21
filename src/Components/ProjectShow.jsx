export default function ProjectShow({id,PROJECTS}){
    let selectedProject = PROJECTS.find(e => e.pid === id);
    return (
        <div>
            <h1>{selectedProject.title}</h1>
            <p>{selectedProject.dueDate}</p>
            <p>{selectedProject.description}</p>
        </div>

    )

}