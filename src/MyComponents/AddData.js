import React ,{useState} from 'react'

export default function AddData(props) {
    const [Name,SetName] = useState("");
    const [Technology,SetTechnology] = useState("");
    const [Language,setLangugae] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if( !Name || !Technology || !Language )
        {
            alert("Name and Technology and Language section can not be Null");
        }

        props.addTodo(Name,Technology,Language);
    }

    return (
        <div className ="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className ="form-label">Name</label>
                    <input type="text" value ={Name}  onChange={(e)=>{SetName(e.target.value)}} className="form-control"  id="title" />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="technology" className ="form-label">Technology</label>
                    <input type="text" value ={Technology} onChange={(e)=>{SetTechnology(e.target.value)}} className="form-control" id="technology"/>  
                </div>

                <div className="mb-3">
                    <label htmlFor="language" className ="form-label">Language</label>
                    <input type="text" value={Language} onChange={(e)=>{setLangugae(e.target.value)}} className="form-control" id="language" placeholder="" />
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">AddTodo</button>
            </form>
        </div>

    )
}
