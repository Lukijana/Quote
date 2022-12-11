import { Routes, Route } from "react-router-dom"
import Quote from "./Quote"
import Random from "./Random"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Quote/> } />
        <Route path="random" element={ <Random/> } />
      
      </Routes>
    </div>
  )
}

export default App