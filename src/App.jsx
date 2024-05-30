import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import conf from './conf/conf' 

import {login,logout} from "./store/authSlice"

import {Footer,Header} from "./components"

import { Outlet } from 'react-router'

import {useDispatch } from "react-redux"
import authService from "./appwrite/auth"



function App() {
  // const [count, setCount] = useState(0)

  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {

    authService.getCurrentUser()
    .then((userData)=>{

     if(userData){
      dispatch(login({userData}))
     }
     else{
      dispatch(logout())
     }

    })
    .catch((error)=>{
      console.log(error+ "Errrrror")
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])

  // console.log(conf.)

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : <h2>Loading</h2>

}

export default App
