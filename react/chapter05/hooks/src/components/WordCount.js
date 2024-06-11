// components/WordCount.js

import { useEffect } from "react"
import { useAnyKeyToRender } from "../hooks/DeepEffect"

/* 의존 관계 배열에 전달할 값으로 함수 영역 안의 변수가 필요할 수도 있다. */
function WordCount({children=""}){
    useAnyKeyToRender()

    const words=children.split(" ")

    useEffect(()=>{
        console.log("fresh render")
    },[words])

    return (
        <>
            <p>{children}</p>
            <p><strong>{words.length} - words</strong></p>
        </>
    )
}

export default WordCount