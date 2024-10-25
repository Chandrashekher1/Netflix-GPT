import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const Navigation = useNavigate()

    const handleRender = () => {
        Navigation("/")
    }

  return (



    <div className='absolute w-44 py-4 px-8 z-10 bg-gradient-to-b from-black cursor-pointer' onClick={handleRender}>
        <img 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    </div>

  )
}

export default Header