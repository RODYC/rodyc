import React from 'react'
import { ToodoItem } from "./ToodoItem";

export const Toodo = () => {
  return (
    <div className='container'>
      <h3> Toodo list </h3>
                            
      <ToodoItem toodo={Toodo}/>
        
    </div>
  
  )
}
