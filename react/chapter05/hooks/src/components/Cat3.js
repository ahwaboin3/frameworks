//components/Cat3.js
import {memo} from "react"
const Cat3=memo(
    ({name,meow=f=>f})=>{
        console.log(`rendering ${name}`)
        return <p onClick={()=>meow(name)}>{name}</p>
    }
)

export default Cat3