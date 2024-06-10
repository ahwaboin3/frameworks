// src/components/ColorListContextHook.js
import {useColors} from "../ColorProvider"
import Color from "./Color"

export default function ColorListContextHook(){
    const {colors}=useColors()
    const colorsArr=colors.colors
    if(!colorsArr.length) return <div>No Colors Listed. (Add a Color)</div>
    return (
        <div className="color-list">
            <h3>ColorList</h3>
            {
                colorsArr.map(color=><Color key={color.id} {...color} />)
            }
        </div>
    )
}