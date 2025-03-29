import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import DataInput from "./DataInput"
import Landing from "./Landing"






function App(){



  return(
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/Track" element={<DataInput/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App