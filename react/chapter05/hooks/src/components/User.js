//components/User.js
/* useReducer로 복잡한 상태 처리하기
useReducer를 사용하면 상태가 더 복잡해질 때 상태 갱신을 더 예측가능하게 처리하는데 도움이 된다.
*/
import { useState } from "react"

const firstUser={
    id:0,
    firstName:"Bill",
    lastName:"Wilson",
    city:"Missoula",
    state:"Montana",
    email:"bwilson@tnwilsons.com",
    admin:false
}
/* firstUser를 초기 상태로 설정한 User라는 컴포넌가 있다. 이 컴포넌트는 적절한 데이터를 표시해준다. */

export default function User(){
    const[user,setUser]=useState(firstUser)
    return(
        <div>
            <h1>
                {user.firstName} {user.lastName}-{user.admin?"Admin":"User"}
            </h1>
            <p>Email : {user.email}</p>
            <p>Location : {user.city},{user.state}</p>
            <button>Make Admin</button>
        </div>
    )
}