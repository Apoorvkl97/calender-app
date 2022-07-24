import React,{useState,useEffect} from 'react'
import Task from './Task'
import AddTask from './AddTask'

const Hour = ({title, tasks, addTask, editTask,deleteTask}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = (e) => {
        e.stopPropagation()
        setIsModalOpen(false)
    }
    
  return (
    <div className='hour' onClick={() => openModal(true)} >
    {isModalOpen && <AddTask title={title} addTask = {addTask}  closeModal={closeModal} />}
    <div className='titleLine'>
        <h2> {title} </h2>
        <div className='line'>
        <div className='tasks'>
        {tasks.map((i) => <Task title={i.title} description={i.description} editTask={editTask} time={title} deleteTask={deleteTask} />)}
        </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Hour