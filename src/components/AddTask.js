import React,{useState} from 'react'

const AddTask = ({title,addTask,closeModal}) => {
  const [input, setInput] = useState({title:'',description:''})
  const buttonClick = () => {
    addTask(title,input)
    setInput({title:'',description:''})
  }
  return (
    <div className='addtask' >
        <input placeholder='title' value={input.title} onChange={(e) => setInput({...input,title:e.target.value})} />
        <input placeholder='description' value={input.description} onChange={(e) => setInput({...input,description:e.target.value})} />
        <div className='buttons'>
        <button onClick={buttonClick} >Add</button>
        <button onClick={(e)=>{closeModal(e)}} >Close</button>
        </div>
    </div>
  )
}

export default AddTask