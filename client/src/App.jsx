import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import DataInput from "./DataInput"






function App(){



  return(
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<DataInput/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App