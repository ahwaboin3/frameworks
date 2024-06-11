/* 훅스로 컴포넌트 개선하기
  리액트가 원래부터 제공하는 훅이 더 있다. 이번 장에서는 리액트가 기본 제공하는 훅들을 몇가지 자세히 살펴본다. 이들 모두는 애플리케이션을 만들 때 중요한 역활을 한다. 몇가지 훅들은 컴포넌트 성능을 최적화할 때 도움이 되는 훅들도 알아 본다
*/

import Checkbox from "./components/Checkbox";
import DependencyRelation from "./components/DependencyRelation";
import NewsFeed from "./components/NewsFeed";
import { useAnyKeyToRender } from "./hooks/DeepEffect";

function App() {
  useAnyKeyToRender()
  return (
    <div className="App">
    </div>
  );
}

export default App;
