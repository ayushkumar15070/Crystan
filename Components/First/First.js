"use client"
import React from 'react'
import "./First.css"

const First = () => {

  const scrollto = () => {
    window.scrollTo({ top: 740, behavior: 'smooth' });

  }

  return (
    <div className='first-banner'>
      <h1>Be With</h1>
      <h1>your own</h1>
      <h1>move</h1>
      <button className="btn" onClick={scrollto}>Explore more</button>
    </div>
  )
}

export default First
