// src/ColorProvider.js
/* 상태가 있는 콘텍스트 프로바이더
    콘텍스트 프로바이더 자체로는 콘텍스트상에 들어 있는 값을 변경할 수 없다. 콘텍스트 프로바이더를 렌더링하는 상태가 있는 콤포넌트를 만들면 상태가 변경되면 컴포넌트가 새로운 콘텍슽트 데이터를 가지고 콘텍스트 프로바이더를 다시 렌더링한다. 콘텍스트 프로바이더의 자식도 새 데이터에 맞춰 다시 렌더링된다.
*/
import {useState, createContext} from "react"
import colorData from "./color-data.json"

const ColorContext=createContext()

export default function ColorProvider({children}){
    const [colors,setColors]=useState(colorData)
    /* 
    setColors를 콘텍스트에 추가하면 다른 개발자가 나중에 이 함수를 사용하면서 실수를 할 여지가 있다. colors 배열의 값을 바꿀 수 있는 방법은 사용자가 색을 추가하거나, 색을 제거하거나, 색에 평점을 메기는 경우 이 3가지이다. 각각의 경우에 대한 함수를 콘텍스트에 추가하는 편이 더 나아보인다.
    */
    const addColor=(title,color)=>{
        setColors([
            ...colors,
            {
                id:5,
                rating:0,
                title,
                color
            }
        ])
    }
    const rateColor=(id,rating)=>
        setColors(
            colors.map(color=>(color.id===id?{...color,rating}:color))
        )
    return (
        <ColorContext.Provider value={{colors,setColors}}>
            {children}
        </ColorContext.Provider>
    )
}