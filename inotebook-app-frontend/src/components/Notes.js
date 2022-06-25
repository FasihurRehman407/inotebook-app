import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

export default function Notes(props) {
    const [note, setNote] = useState({ utitle: "", udescription: "", utag: "" });

    const context = useContext(NoteContext)
    const { notes, getAllNotes } = context;
    useEffect(() => {
        getAllNotes()
    });
    const ref = useRef(null)
    const refClose = useRef(null)
    const updateNote = (note) => {
        ref.current.click();
        setNote({ utitle: note.title, udescription: note.description, utag: note.tag })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

   
    const handleClick = ()=>{
        console.log(note)
        refClose.current.click();
    }

    return (
        <>
            <button type="button" style={{ display: 'none' }} ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="utitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="utitle" name='utitle' onChange={onChange} value={note.utitle} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="udescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" name='udescription' id="udescription" onChange={onChange} value={note.udescription} />
                                </div> <div className="mb-3">
                                    <label htmlFor="utag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" name='utag' id="utag" onChange={onChange} value={note.utag} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"  ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className='my-5'>Your Notes</h2>
                <small>{notes.length===0 && 'No notes to display'}</small>
                <div className='row'>
                    {notes.map(note => {
                        return <NoteItem updateNote={updateNote} key={note._id} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}
