import React, { useEffect,useState } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
export default function AuthLayout({children,authentication= true}) {

    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)


    useEffect(() => {
if(authentication && authStatus !== authentication)
{
    navigate('/login')  
}

else if (!authentication && authStatus === authentication){
    navigate('/')   
}
    },[authStatus,navigate,authentication])

  return (
    <div>AuthLayout</div>
  )
}

