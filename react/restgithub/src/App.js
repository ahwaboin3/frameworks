import './App.css';
import {useState} from "react"

function App() {
  const [keyword,setKeyword]=useState("")
  const fetchData=()=>{
    // console.log(keyword)
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response=>response.json())
      .then(data=>console.log(data))
  }
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={e=>setKeyword(e.target.value)}
      />
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
}

export default App;
