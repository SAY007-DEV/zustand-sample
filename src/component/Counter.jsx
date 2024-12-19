import { useState } from "react"
import useStore from "../store"
function Counter(props) {
  const {count,inc,dec}=useStore()
  return (
    <div>
    <div>
        count : {count}
    </div>

        <button onClick={()=>inc()}>click</button>
        <button onClick={()=>dec()}>click to dec</button>
    </div>
  )
}

export default Counter