import { useState } from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import LoginComponent from './components/LoginComponent'
import SignUpComponent from './components/SignUpComponent'
import ForgotPassword from './components/ForgotPassword'


function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<ListEmployeeComponent/>}></Route>
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
        <Route path='/login' element={<LoginComponent/>}></Route>
        <Route path='/signup' element={<SignUpComponent/>}></Route>
        <Route path='/resetpassword' element={<ForgotPassword/>}></Route>
      </Routes>
      <div style={{
        position:"fixed",
        bottom:"0",
        width:"100%"
      }}>
      <FooterComponent/>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
