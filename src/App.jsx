import { Navigate, Outlet, Route, Routes } from 'react-router'
import './App.css'
import Landingpage from './components/Ldfolder/Landingpage'
import Contact from './components/Contactfolder/Contact'
import Signup from './components/Sufolder/Signup'
import Signin from './components/Sifolder/Signin'
import Dashboard from './components/Dashboardfolder/Dashboard'
import Product from './components/productfolder/Product'
import Invest from './components/Inveastmentfolder/Invest'
import View from './components/Viewfolder/View'
import Password from './components/Passwordfolder/Password'
import Profile from './components/Profilepage/Profile'
import History from './components/Historyfolder/History'
import Wallet from './components/Walletfolder/Wallet'
import Emailpage from './components/Emailpagefolder/Emailpage'
import Forgetpassword from './components/Forgetpasswordfolder/Forgetpassword'
import Investperformance from './components/InvestmentPerfolder/Investperformance'
import Adminregister from './components/Adminfolder/Adminregister'
import AdminDashboard from './components/AdminDashboardfolder/AdminDashboard'
import Notfound from './components/Pagenotfoundfolder/Notfound'
import Adminuser from './components/Adminuserfolder/Adminuser'
import Adminsetting from './components/Adminsettingfolder/Adminsetting'

function App() {

  // const admintoken = localStorage.getItem('adminToken');
  // const AdminLayout = () => {
  //   return (
  //   <Routes>
  //     <Route path='admin/' element={admintoken ? <Outlet/> : <Navigate to={'/adminreg'} />}>
  //       <Route path="" element={<AdminDashboard/>} />
  //     </Route>
  //   </Routes>
  //   )
  // }


  // const isAdmin = localStorage.getItem('admintoken'); 
  // const isUser = localStorage.getItem('token');

  let admintoken = localStorage.admintoken
  const DashboardLayout = () => {
    let token = localStorage.token
    return (
      <Routes>
        <Route path='dashboard/' element={token ? <Outlet /> : <Navigate to={'/login'} />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    )
  }


  return (

    <>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/*' element={<DashboardLayout />} />
        <Route path='/product' element={<Product />} />
        <Route path='/invest' element={<Invest />} />
        <Route path="/view/:id" element={<View />} />
        <Route path='/password' element={<Password />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/history' element={<History />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/emailpage' element={<Emailpage />} />
        <Route path='/forgetpassword' element={<Forgetpassword />} />
        <Route path='/investper' element={<Investperformance />} />
        <Route path='/adminreg' element={<Adminregister />} />
        <Route path='/admindb' element={<AdminDashboard />} />
        <Route path='/adminuser' element={<Adminuser />} />
        <Route path='/adminsetting' element={<Adminsetting />} />
        <Route path='*' element={<Notfound />} />
        {/* <Route path='/*'  element={<AdminLayout/>}/> */}

      </Routes>
    </>
  )
}

export default App
