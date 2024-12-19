
import { useState } from "react"
import useStore from "../store"
export default function AnotherCounter(props) {
    const {count,inc,mul}=useStore()
    return (
        <div>
            <div>
              Another  count : {count}
            </div>

            <button onClick={() =>inc()}>click</button>
            <button onClick={() =>mul()}>click to multi</button>
        </div>
    )
}
