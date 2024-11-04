import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../reducer/auth-slice'

function Login() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authActions.login())
  }

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <div className='flex justify-center items-center min-w-screen min-h-screen'>
        <div className='flex flex-col justify-center items-center border-2 p-8 gap-2'>
            <h1 className='text-3xl font-semibold'>Login</h1>
            <div className='flex justify-center items-center'>
                <button className='border-2 p-2 bg-Primary text-white' onClick={handleLogin}>Login</button>
                <button className='border-2 p-2 bg-Primary text-white' onClick={handleLogout}>logout</button>
            </div>
        </div>
    </div>
  )
}

export default Login