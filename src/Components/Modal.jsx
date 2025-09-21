import {useRef,useImperativeHandle} from "react";
import {createPortal} from "react-dom";

export default function Modal({ref,children}){
    const modal = useRef();
    useImperativeHandle(ref,()=>({
        open(){
            modal.current.showModal();
        }
    }))
    return createPortal (
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={modal}>
            {children}
        </dialog>,
        document.getElementById('modal-root')
    )

}