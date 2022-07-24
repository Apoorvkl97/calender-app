import React,{useState} from 'react'

const Edit = ({editTask,time,title,description,closeEdit,deleteTask}) => {
    const [input, setInput] = useState({title:title,description:description})
    const [orTitle, setOrTitle] = useState(title)
  const buttonClick = () => {
    editTask(time,orTitle,input)
  }
  return (
    <div className='edit' >
        <input placeholder='title' value={input.title} onChange={(e) => setInput({...input,title:e.target.value})} />
        <input placeholder='description' value={input.description} onChange={(e) => setInput({...input,description:e.target.value})} />
        <div className='buttons'>
        <button onClick={buttonClick} >Save</button>
        <button onClick={() => deleteTask(time,title)} >Delete</button>
        <button onClick={(e)=>{closeEdit(e)}} >Close</button>
        </div>
    </div>
  )
}

export default Edit