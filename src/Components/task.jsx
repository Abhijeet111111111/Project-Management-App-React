import {useState} from "react";

export default function Task({onAdd,currId}){
    const [task,setTask] = useState('');
    function handleChange(evt){
        setTask(evt.target.value);
    }
    function handleOnAdd(){
        onAdd({task : task,pId:currId,tId:Math.random()})
        setTask('');
    }

    return (
        <div>
            <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" onChange={handleChange} value={task} type="text"/>
            <button onClick={handleOnAdd}>Add</button>
        </div>
    )
}