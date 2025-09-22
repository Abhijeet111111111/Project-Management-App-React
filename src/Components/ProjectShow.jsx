import Task from "./task.jsx";
export default function ProjectShow({onTaskDelete,onAdd,onDelete,id,PROJECTS,allTasks}){
    console.log(allTasks)
    let selectedProject = PROJECTS.find(e => e.pid === id);
    return (
        <div className="w-[35rem] mt-16">
            <div>
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectedProject.title}</h1>
            <p className="text-stone-600 mb-4">{selectedProject.dueDate}</p>
            <p className="text-stone-600 mb-4">{selectedProject.description}</p>
            </div>
            <div>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onDelete}>Delete</button>
        </div>
            {allTasks && <div>
                <ul>
                    {allTasks.map(t => {
                        if (t.pId === id) {
                            return (
                                <li key={t.tId}>{t.task}<button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" onClick={() =>onTaskDelete(t.tId)}>clear</button></li>

                            )
                        }
                    })}
                </ul>
            </div>}

            <div>
                <Task onAdd={onAdd} currId={id}/>
            </div>

        </div>

    )

}