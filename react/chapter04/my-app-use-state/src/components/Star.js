//components/Star.js
//npm install react-icons --save
import { FaStar } from "react-icons/fa";

const Star=({selected=false})=>{
    return <FaStar color={selected?"red":"grey"} size="3em" />
}

export default Star;