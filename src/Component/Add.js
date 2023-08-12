import React, { useState } from 'react'

export const Add = ({addtodo}) => {
    const [title, settitle]=useState("");
    const [desc,setdesc]=useState("");
    const submit=(event)=>{
        event.preventDefault();
        if (!title || !desc){
            alert("Nirajan!! Recheck your title and description!!!!")
        }
        
        addtodo(title,desc);
    }

    return (

        <div className="container my-3">
            <h3> Got a new Todo... Add it here Nirajan.!!!!</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Work to do</label>
                    <input type="work" value={title} className="form-control" id="exampleInputEmail1" 
                    onChange={(event)=>settitle(event.target.value)}/>
                        <div id="" className="form-text">Your todos will be kept secret</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" value={desc} className="form-control" id="exampleInputPassword1" onChange={(event)=>setdesc(event.target.value)}/>
          </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
