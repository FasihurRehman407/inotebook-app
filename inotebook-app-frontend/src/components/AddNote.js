import React from 'react'
import { useContext,useState } from 'react';
import NoteContext from '../context/notes/noteContext';
export default function AddNote(props) {
  const [note, setNote] = useState({title:"",description:"",tag:""});
  const context = useContext(NoteContext)
  const {addNote} = context;
  const onChange=(e)=>{
    setNote({...note,[e.target.name] : e.target.value})
  }

    const handleAddNote = (e)=>{
        e.preventDefault();
        // props.showAlert("deleted" , "danger")
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
    
      }
  return (
    <>
    <div className='container my-5'>
      <h2 className='mb-4'>Add your note</h2>
      <form >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} required />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" name='description' value={note.description} id="description" onChange={onChange} required />
  </div> <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" name='tag' value={note.tag}  id="tag" onChange={onChange} required/>
  </div>
  
  <button type="submit" disabled={note.title.length<5 || note.description.length<8} onClick={handleAddNote}  className="btn btn-primary">Submit</button>
</form>

</div>
    </>
  )
}
