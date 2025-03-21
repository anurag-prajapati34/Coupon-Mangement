import { useContext, useState } from 'react'

import './App.css'
import './index.css'
import GuestPage from './pages/GuestPage'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

import {Toaster}from 'react-hot-toast'


function App() {


  return (
    <div className='w-full'>

<Outlet/>
<Toaster/>
    </div>
  )
}

export default App
