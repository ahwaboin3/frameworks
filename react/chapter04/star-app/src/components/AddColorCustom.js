// components/AddColorCustom.js
/* 커스텀 훅 만들기
    input 요소가 많이 들어 있는 큰 폼을 만든다면 다음 코드를 붙여넣고 싶은 유혹을 받게 된다.
    value={title}
    onChange={event=>setTitle(event.target.value)}
    코드를 복사해 붙여넣는다는 사실은 함수에서 추상화 할수 있는 중복이 발생했음을 보여준다.
    제어가 되는 폼 컴포넌트를 만들 때 필요한 세부 사항을 커스텀 훅으로 묶을 수 있다. 제어가 되는 폼 입력을 만들 때 필요한 중복을 추상화해 없애 주는 우리만의 useInput 훅을 만들어 보자.
*/
import { useInput } from "./hooks/hooks";

export default function AddColorCustom({onNewColor=f=>f}){
    const [titleProps,resetTitle]=useInput("");
}