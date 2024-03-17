import Main from "./Renders/Main"
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" Component={Main} />
    </Routes>
    </>
  )
}

export default App