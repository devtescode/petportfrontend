import { Route, Routes } from 'react-router'
import './App.css'
import Landingpage from './components/Ldfolder/Landingpage'
import Contact from './components/Contactfolder/Contact'
import Signup from './components/Sufolder/Signup'
import Signin from './components/Sifolder/Signin'
import Notfound from './components/Pagenotfoundfolder/Notfound'
import Dashboard from './components/Dashboardfolder/Dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Signin/>}/>
      <Route  path='dashboard' element={<Dashboard/>}/>
      <Route  path='*' element={<Notfound/>}/>
    </Routes>     
    </>
  )
}

export default App
