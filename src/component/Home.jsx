import React, { useState } from 'react'
import Tasks from './Tasks'

const Home = () => {
    const[state,setState]=useState({
        title:'',
        description:''
    })
    const[data,setData]=useState([]);


    const changeHandler=(e)=>{
        const {name,value} = e.target;
        setState((prev)=>{
            return {...prev,[name]:value}
           
        })
        // console.log(state)
    }

    const dltTask =(index)=>{
        const newTodo=[...data]
        newTodo.splice(index,1);
        setData(newTodo);
    }

    
    const addHandler=(e)=>{
        e.preventDefault();
        setData((pre)=>{
            return [...pre,state]
        })
        setState("")
        

    }
    console.log(data)
  return (
   <div className="container">
    <h2>Daily Goals</h2>
    <form action="" >
        <input type="text" placeholder='title' name='title' onChange={changeHandler} value={state.tit
        }/>
        <input type="text" placeholder='description' name='description' onChange={changeHandler} value={state.description} />
        <button onClick={addHandler}>ADD</button>
    </form>
    <div className="tasks">
        {
            data.map((val,index)=><Tasks key={index} title={val.title} description={val.description} dltHandler={dltTask} index={index}/>)
        }
        
    </div>
   </div>
   
  )
}

export default Home