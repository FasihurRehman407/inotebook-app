import NoteContext from "./noteContext";
import { useState } from "react";
import Api from "../../Api";
const NoteState = (props) =>{
const [notes, setNotes] = useState([]);


const getAllNotes = async ()=>{
 

        const res = await Api.get('/api/v1/note/notes')
        setNotes(res.data.data)
   
}
    const addNote = async (title,desc,tag)=>{
        await Api.post("/api/v1/note/addNote",{title,description:desc,tag})
        setNotes(notes.concat({title,description:desc,tag}));
    }
    const updateNote = ()=>{}
    const deleteNote = async (id)=>{
        await Api.delete(`/api/v1/note/deleteNote/${id}`)
        const newNotes= notes.filter(note=>{
            return note._id!==id
        })
        setNotes(newNotes)
    }
    
    return( <NoteContext.Provider value={{notes , addNote , updateNote , deleteNote , getAllNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;