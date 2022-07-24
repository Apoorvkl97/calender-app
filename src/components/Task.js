import React,{useState} from 'react'
import Edit from './Edit'

const Task = ({title, description,editTask,time,deleteTask}) => {
    const [edit, setEdit] = useState(false)
    const taskClick = (e) => {
        e.stopPropagation()
        setEdit(true)
    }
    const closeEdit = (e) => {
        e.stopPropagation()
        setEdit(false)
    }
    const desc = () => {
        let n1 = Number(time.split(' ')[0])
        let type = time.split(' ')[1]
        let n2 = n1+1
        if(n1 === 11){
            type = 'PM'
        }
        if(n1 === 12){
            n2 = 1
        }
        return time+' - '+n2+' '+type
    }
  return (
    <div className='task' onClick={(e) => taskClick(e)} >
    {edit && <Edit editTask={editTask} time={time} title={title} description={description} closeEdit={closeEdit} deleteTask={deleteTask} />}
        <h2>{title}</h2>
        <p>{desc()}</p>
    </div>
  )
}

export default Task