import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AgregarTransaccion from '../pages/AgregarTransaccion'
import Menu  from '../components/Menu'
import Footer from '../components/Footer'
import { ListarTransaccion } from '../pages/ListarTransaccion'
import { Resumen } from '../pages/Resumen'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agregarTransaccion' element={<AgregarTransaccion/>}/>
        <Route path='/listarTransaccion' element={<ListarTransaccion/>}/>
        <Route path='/resumen' element={<Resumen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
