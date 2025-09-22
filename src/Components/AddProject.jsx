import {useState,useRef} from "react";
import Modal from "./Modal.jsx";
export default function AddProject ({addNewProject,onCancle}){
    const dialog = useRef();
    const [projectData,setProjectData] = useState({
        title : '',
        description :'',
        dueDate : ''
    });
    const handleInputChange = (evt) =>{
        setProjectData(oldData => ({...oldData,[evt.target.name]:evt.target.value}))
    }
    const handleAddProject = () =>{
        if(projectData.title === '' || projectData.description==='' || projectData.dueDate === ''){
            dialog.current.open();

            return ;
        }
        const projectd = projectData
        setProjectData({
            title : '',
            description: '',
            dueDate: ''
        })
        addNewProject(projectd);
    }
    return (
        <div className="flex flex-col gap-8 ">
            <div>
            <Modal ref={dialog}>
                <h2 className="text-xl font-bold text-stone-700 my-4" >Invalid Input</h2>
                <p className="text-stone-600 mb-4">oops ... looks like you missed something</p>
                <form className="mt-4 text-right" method="dialog">
                    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Okay</button>
                </form>
            </Modal>

            <h1 className="text-6xl">Add New Project :-</h1>
            <div className="flex flex-col gap-4">
            <div>
                <label className="text-sm font-bold uppercase text-stone-500">Name</label>
                <input name="title" onChange={handleInputChange} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </div>
                <div><label className="text-sm font-bold uppercase text-stone-500">Description</label>
                    <input name="description" onChange={handleInputChange} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                </div>
                <div><label className="text-sm font-bold uppercase text-stone-500">Name</label>
                    <input name="dueDate" type="date" onChange={handleInputChange} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                </div>
            </div>

                <div><button  onClick={handleAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Add</button>
                    <button className="text-stone-700 hover:text-stone-950" onClick={onCancle}>Cancle</button>
                </div>
            </div>
        </div>
    )
}