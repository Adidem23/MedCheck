import Ultimate from './Renders/Ultimate'
import Profile from './Components/Auth/Profile'
import { Routes, Route } from 'react-router-dom'
import Signup from './Components/Auth/Signup'
import SignInNew from './Components/Auth/SignIn'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Ultimate} />
        <Route path="/profile" Component={Profile} />
        <Route path='/signup' Component={Signup} />
        <Route path='/signin' Component={SignInNew} />
      </Routes>
    </>
  )
}

export default App