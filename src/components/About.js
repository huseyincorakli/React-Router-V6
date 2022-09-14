import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(() => {
      navigate("home")
    }, 3000);
  },[navigate])
  return (
    <div>
      Temporarily out of service.You are led home...
    </div>
  )
}

export default About
