import { Navigate, Outlet, Route, Routes } from 'react-router'
import './App.css'
import Landingpage from './components/Ldfolder/Landingpage'
import Contact from './components/Contactfolder/Contact'
import Signup from './components/Sufolder/Signup'
import Signin from './components/Sifolder/Signin'
import Notfound from './components/Pagenotfoundfolder/Notfound'
import Dashboard from './components/Dashboardfolder/Dashboard'
import Investment from './components/Investmentfolder/Investment'

function App() {

  const DashboardLayout = () => {
    let token = localStorage.token
    return (
      <Routes>
        <Route path='dashboard/' element={token ? <Outlet/> : <Navigate to={'/login'} />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    )
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Signin/>}/>
      <Route  path='/*' element={<DashboardLayout/>}/>
      <Route path='investment' element={<Investment/>}/>
      <Route  path='*' element={<Notfound/>}/>
    </Routes>     
    </>
  )
}

export default App
