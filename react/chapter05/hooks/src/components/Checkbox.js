// components/Checkbox.js
/* useEffect 소개
    렌더링은 앱이 처음 적재될 때 일어나고, 프롭이나 상태 값이 변경될 때도 일어 난다. 하지만 렌더링이 끝난 다음에 무언가를 하고 싶은 경우에는 useEffect 훅을 사용합니다.
*/

import {useState} from "react"

export default function Checkbox(){
    const [checked,setChecked]=useState(false)

    return (
        <>
            <input 
                type="checkbox"
                value={checked}
                onChange={()=>setChecked(checked=>!checked)}
            />
            {checked?"checked":"not checked"}
        </>
    )
}