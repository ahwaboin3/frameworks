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
import { FaDove, FaEvernote } from "react-icons/fa";

/* 
  점수에 따라 선택된 별은 빨간색으로 칠해져야 하고, 선택되지 못한 별은 회색으로 표시되야 한다.
  선택된 속성에 따라 자동으로 별을 만들어내는 컨포넌트를 하나 만들자.
*/
/* 
  10점 별점 시스템이 훨씬 더 자세한 정보를 제공할 수 있다.
*/

const Star=({selected=false})=>{
  return <FaStar color={selected?"red":"grey"} />
}

// 인자로 전달된 갯수 만큼 배열을 생성하는 함수
const createArray=length=>[...Array(length)]

function StarRating({totalStars=5}){
  return createArray(totalStars).map((n,i)=><Star key={i} />)
}
/* 
  사용자가 별을 클릭해서 점수를  바꿀 수 있도록 해야 한다.
  점수는 rating이라는 변수에 저장하도록 한다.
  이 점수 값은 리액트 상에 이 값을 저장하고 변경해야 한다.
  상태를 리액트 함수 컴포넌트에 넣을 때는 훅스(Hooks)하고 부르는 리액트 기능을 사용한다.
  훅스에는 컴포넌트 트리와 별로로 재사용 가능한 코드 로직이 들어 있다. 훅스를 사용하면 우리가 만든 컴포넌에 기능을 끼워 넣을 수 있다. 리액트는 몇 가지 훅을 기본 제공하므로, 즉시 이런 훅을 사용할 수 있다.
  상태를 리액트 컴포넌트에 추가하고 싶을 때 사용할 수 있는 리액트 useState훅이다. 이 훅은 실제로는 react패키지에 들어 있다. 따라서 react 패키지를 임포트하기만 하면 된다.
*/
function App() {
  return (
    <div className="App">
      <div>
        <StarRating />
      </div>
      {/* 
        <div>
          <StarRating totalStars={10} />
        </div> 
        <div>
          <FaDove /><FaEvernote />
        </div>
      */}
    </div>
  );
}

export default App;
