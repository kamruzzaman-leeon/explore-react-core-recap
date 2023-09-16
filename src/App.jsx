import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from '../Posts'
function App() {
  

  return (
    <>
    <h3>React Core Concept Recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <hr />
      <Post></Post>
    </>
  )
}

export default App
