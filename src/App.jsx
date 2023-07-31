import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { DRouting } from "./Routing";
import { RecoilRoot } from "recoil";


function App() {
  return (
    <RecoilRoot>
      <Router>
        <DRouting />
      </Router>
    </RecoilRoot>
  )
}

export default App
