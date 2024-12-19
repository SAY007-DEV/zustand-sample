import React from 'react'
import useStore from '../store'
function Counter3() {
    const{divd,count}=useStore()
  return (
    <div>Counter3 :{count} <br />
    <button onClick={()=>divd()}>divide</button>
    
    
    
    
    
    </div>
  )
}

export default Counter3