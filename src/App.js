import './App.css';
import Hour from './components/Hour';
import {useState, useEffect} from 'react';
function App() {
  const [data, setData] = useState([])

  const addTask = (time, task) => {
    setData(prev => {
      let newArr = [...prev]
      newArr.forEach((i) => {
        if(i.title === time){
          i.tasks.push(task)
        }
      })
      return newArr
    })
  }

  const editTask = (time,taskTitle,change) => {
    setData(prev => {
      let newArr = [...prev]
      newArr.forEach((i) => {
        if(i.title === time){
          i.tasks.forEach((j) => {
            if(j.title === taskTitle){
              j.title = change.title
              j.description = change.description
            }
          })
        }
      })
      return newArr
    })
  }

  const deleteTask = (time,taskTitle) => {
    setData(prev => {
      let newArr = [...prev]
      newArr.forEach((i) => {
        if(i.title === time){
          i.tasks.forEach((j,index) => {
            if(j.title === taskTitle){
              i.tasks.splice(index,1)
            }
          })
        }
      })
      return newArr
    })
  }

  useEffect(() => {
    if(data.length === 0){
      const times = ['9 AM','10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM']
    times.forEach((i) => {
      setData((prev) => {
        let newArr = [...prev]
        newArr.push({title:i,tasks:[]})
        return newArr
      })
    })
    }
  },[])

  useEffect(() => {
    console.log(data)
  },[data])
  return (
    
    <div className="App">
    {data && data.map((i) => <Hour title={i.title} tasks={i.tasks} addTask={addTask} editTask={editTask} deleteTask={deleteTask} />)}
    </div>
    
  );
}

export default App;
