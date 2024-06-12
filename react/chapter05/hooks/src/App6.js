//src/App6.js

import {useState} from "react"
import Cat3 from "./components/Cat3"
export default function App6(){
    const [cats,setCats]=useState(["Biscuit","Jungle","Outlaw"])
    return (
        <>
            {
                cats.map((name,i)=>
                    <Cat3 
                        key={i} 
                        name={name}
                        meow={name=>console.log(`${name} has meowed`)}
                    />
                )
            }
            <button onClick={()=>setCats([...cats,prompt("Name a cat")])}>Add a Cat</button>
        </>
    )
}