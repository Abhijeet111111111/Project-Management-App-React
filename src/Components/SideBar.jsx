
export default function SideBar({PROJECTS,addProject,showProject,activeProjectId}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">

            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={addProject}>New Project</button>
            <h2 className="text-2xl font-bold text-stone-700 mb-4 mt-4">Your Projects</h2>

            {PROJECTS.map((e) => {
                let classes = "w-full  text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                if(e.pid === activeProjectId){
                    classes += " text-stone-200 bg-stone-800";
                }
                else {
                    classes += " text-stone-100";
                }
                return <p className=" my-4" key={e.pid}>
                    <button

                        onClick={() => showProject(e.pid)}
                        className={classes}>
                        {e.title}
                    </button>
                </p>
            })}
        </aside>
    )
}