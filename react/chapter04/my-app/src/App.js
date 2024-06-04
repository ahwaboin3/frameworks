/* 리액트 상태 관리
  상태(state)
  상태가 있는 컴포넌트를 만드는 방법을 배우고,
  컴포넌트 트리의 아래 방향으로 상태를 전달하는 방법과 사용자 상호작용을 컴포넌트 트리의 위쪽으로 도려 보내는 방법을 살펴 본다.
*/
/* 별점 컴포넌트 만들기
  5점 만점의 별점 시스템
  먼저 별이 필요하다.
*/
import { FaStar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <FaStar />
    </div>
  );
}

export default App;
