import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Three from './index.jsx'


function App() {
 
  return (
    <>
    <Canvas id="canvas">
     <Three/>
    </Canvas>
    </>
  )
}

export default App
