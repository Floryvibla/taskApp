import React,{useState, useEffect} from 'react'

import './css/input.css'

import Input from './Input'
import DoneBtn from './Done'
import BtnDelete from './Delete'
import BtnDeleteAll from './DeleteAll'
import ViewTask from './ViewTask'


export default function Task(){
    const [tasks, setTasks] = useState([])
    const [text, setText]= useState('')

    const add= (e) => {
        setText(e)
        setTasks([...tasks, {task: e, done: false}])
    }

    const remove= (index, e) =>{
        e.stopPropagation()
        let newList= [...tasks]
        newList.splice(index, 1)
        setTasks(newList)
    }
    const deleteAll= ()=>{
        let newList= [...tasks]
        newList.splice(0, newList.length)
        setTasks(newList)
    }
    const done= (index, e) =>{
        e.stopPropagation()
        let newList= [...tasks]
        newList[index].done = !newList[index].done 
        setTasks(newList)
    }
    const changeBgrd= (index) =>{
        let newList= [...tasks]
        newList[index].done = !newList[index].done 
        setTasks(newList)
        console.log(index);
    }

    useEffect(() => {
        const tasks= JSON.parse(localStorage.getItem('tasks'))
        if(tasks){
            setTasks(tasks)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    


    const list= tasks.map((i, index) => {
        return(
            <ViewTask 
                onClickChangeBgrd={() => changeBgrd(index)}
                key={index}
                doneBtn= {
                    <DoneBtn 
                        onClickBtn={(e)=> done(index, e)}
                        done={i.done}
                    />}
                taskText= {i.task}
                deleteBtn= {
                    <BtnDelete onClickBtn={(e)=> remove(index, e)}></BtnDelete>
                }
                done= {i.done}
            
            />
        )
    })
    
    
    return(
        <div className="container">
            <div className="header">
                <div className="header-title">
                    Você tem {tasks.length} {tasks.length <= 1 ? "tarefa" : "tarefas"}
                </div>
                <div className="input-div">
                    <Input 
                        type='text' 
                        required='required' 
                        value={text} 
                        onChange={(e) => add(e)}
                    />
                </div>
            </div>
            <div className="option">
                {tasks.length > 1 &&
                    <div>
                    <BtnDeleteAll 
                        onClickBtn={deleteAll}
                        text="Deletar todas"
                    />
                    </div>
                }
            </div>
            
            <div className="contents">
                <div className="list">
                {tasks.length === 0 &&
                    <h1>Você está sem tarefa</h1>
                }
                    {list}
                </div>
            </div>
            
        </div>
    )
}