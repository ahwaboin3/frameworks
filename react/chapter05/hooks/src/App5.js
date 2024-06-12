//src/App5.js
import {useState} from "react"
import PureCat from "./components/Cat2"
export default function App5(){
    const [cats,setCats]=useState(["Biscuit","Jungle","Outlaw"])
    return (
        <>
            {
                cats.map((name,i)=>
                    <PureCat key={i} name={name}/>)
            }
            <button onClick={()=>setCats([...cats,prompt("Name a cat")])}>Add a Cat</button>
        </>
    )
}