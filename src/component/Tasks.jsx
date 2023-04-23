import React from 'react'

const Tasks = ({title,description,dltHandler,index}) => {
    
  return (<>
    <div className="task">
        <div><h4> {title} </h4>
        <p> {description} </p></div>
    <button onClick={()=>{
      dltHandler(index)
    }}>-</button>

    </div>
    </>
  )
}

export default Tasks